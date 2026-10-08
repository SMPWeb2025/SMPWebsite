import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // loads translation JSON files from /public/locales/{lng}/{ns}.json over http,
  // lazily, only for the language/namespace actually needed
  .use(HttpBackend)
  // checks localStorage first, then browser language, for the initial language.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // if a key is missing in hi.json, show the English text instead of a blank string or a raw key name
    supportedLngs: ['en', 'hi'], // add more codes here as you add languages, e.g. 'mr'
    ns: ['common', 'gymkhana', 'cto', 'elp', 'mentorship', 'ourobjective', 'team', 'media', 'culturals', 'institutebodies', 'technicalaffairs', 'accomodation', 'feestructure', 'incomingintroduction', 'lettertoparents', 'onboarding', 'scholarships', 'thingstobring'], // add a namespace per page/section as you build them out
    defaultNS: 'common',

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // remembers the user's choice across visits
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    react: {
      useSuspense: true, // lets us use <Suspense> to show a loader while the translation JSON is being fetched
    },
  });

export default i18n;
