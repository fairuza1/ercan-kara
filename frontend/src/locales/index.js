import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json"
import tr from "./translations/tr.json"
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    tr: {
      translation:tr
    },
  },

  fallbackLng: navigator.language,//tarayıcının dili ne ise öncelik olarak onu getirecektir

  interpolation: {
    escapeValue: false,
  },
});