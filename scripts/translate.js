// One-time script to auto-generate a translated JSON file from an English one.
// Run this AFTER you've extracted a page's strings into en/<page>.json.
// The Hindi gymkhana.json in this POC was translated by hand as a demo -
// for every other page, use this script instead so it scales.
//
// Usage:
//   GOOGLE_API_KEY=xxxx node scripts/translate.js gymkhana hi
//   GOOGLE_API_KEY=xxxx node scripts/translate.js gymkhana mr
//
// Get an API key: console.cloud.google.com -> enable "Cloud Translation API"
// -> Credentials -> Create API key. Free tier: 500,000 chars/month, resets
// monthly, never expires - a page like gymkhana.json is ~4,000 characters,
// so the whole site will comfortably fit in the free tier.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = process.env.GOOGLE_API_KEY;

const [, , pageName, targetLang] = process.argv;

if (!pageName || !targetLang) {
  console.error('Usage: node scripts/translate.js <pageName> <targetLangCode>');
  console.error('Example: node scripts/translate.js gymkhana hi');
  process.exit(1);
}
if (!API_KEY) {
  console.error('Set GOOGLE_API_KEY env var first.');
  process.exit(1);
}

const srcPath = path.join(__dirname, '..', 'public', 'locales', 'en', `${pageName}.json`);
const outPath = path.join(__dirname, '..', 'public', 'locales', targetLang, `${pageName}.json`);

// Flattens nested JSON into { "a.b.c": "text" } so we can send everything
// to the API in ONE request (arrays too - each array item gets its own key),
// then rebuild the same nested shape afterwards.
function flatten(obj, prefix = '') {
  const out = {};
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(val)) {
      val.forEach((item, i) => { out[`${fullKey}.__arr__.${i}`] = item; });
    } else if (typeof val === 'object' && val !== null) {
      Object.assign(out, flatten(val, fullKey));
    } else {
      out[fullKey] = val;
    }
  }
  return out;
}

function unflatten(flat) {
  const out = {};
  for (const [key, val] of Object.entries(flat)) {
    const parts = key.split('.');
    let cur = out;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLast = i === parts.length - 1;
      if (part === '__arr__') continue; // marker, handled by array logic below
      const nextPart = parts[i + 1];
      if (nextPart === '__arr__') {
        if (!cur[part]) cur[part] = [];
        const idx = Number(parts[i + 2]);
        cur[part][idx] = val;
        break;
      }
      if (isLast) {
        cur[part] = val;
      } else {
        cur[part] = cur[part] || {};
        cur = cur[part];
      }
    }
  }
  return out;
}

async function main() {
  const en = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));
  const flat = flatten(en);
  const keys = Object.keys(flat);
  const texts = Object.values(flat);

  const res = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: texts,        // array = one API call for the whole page, not one per string
      target: targetLang,
      source: 'en',
      format: 'html',  // preserves <b> and <i> tags in the translation
    }),
  });

  const data = await res.json();
  if (data.error) {
    console.error('API error:', data.error.message);
    process.exit(1);
  }

  const translatedFlat = {};
  data.data.translations.forEach((t, i) => {
    translatedFlat[keys[i]] = t.translatedText;
  });

  const nested = unflatten(translatedFlat);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(nested, null, 2), 'utf-8');
  console.log(`Wrote ${outPath} (${texts.length} strings translated)`);
  console.log('IMPORTANT: this is raw machine translation - review it before shipping,');
  console.log('especially any page with long-form paragraphs.');
}

main();
