import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/global.json';
import translationPT from './locales/pt/global.json';
import translationIS from './locales/is/global.json';

const resources = {
    en: {
        translation: translationEN,
    },
    is: {
        translation: translationIS,
    },
    pt: {
        translation: translationPT,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en', // idioma padrão
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;