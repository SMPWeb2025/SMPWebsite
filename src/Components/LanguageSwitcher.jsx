import { useTranslation } from 'react-i18next';

// Drop this in the navbar wherever the old toggle used to be.
// i18next-browser-languagedetector + the 'caches: localStorage' setting
// in i18n.js means the choice persists across page loads automatically -
// no extra code needed for that part.
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-sm text-white ${i18n.language === 'en' ? 'font-bold underline' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className={`px-2 py-1 rounded text-sm text-white ${i18n.language === 'hi' ? 'font-bold underline' : ''}`}
      >
        हि
      </button>
      {/* add another button here later for the second language, e.g. 'mr' */}
    </div>
  );
};

export default LanguageSwitcher;
