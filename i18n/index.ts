import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
const resources = {
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  fr: { translation: fr },
};

export const languageCodes = Object.keys(resources); // ['en', 'es', 'fr']

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // react already does escaping
  },
});

export default i18n;
