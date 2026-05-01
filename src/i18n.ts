import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "dashboard": "Dashboard",
      "portfolio": "Student Portfolios",
      "xp": "XP",
      "badgesTitle": "Badges",
      "badges": "Badges",
      "language": "Language",
      "search": "Search...",
      "upload": "Upload Work",
      "evidence": "Evidence"
    }
  },
  sw: {
    translation: {
      "dashboard": "Dhibiti",
      "portfolio": "Kwingineko ya Wanafunzi",
      "xp": "Uzoefu (XP)",
      "badgesTitle": "Nishani",
      "badges": "Nishani",
      "language": "Lugha",
      "search": "Tafuta...",
      "upload": "Pakia Kazi",
      "evidence": "Ushahidi"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
