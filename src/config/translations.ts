import { Language } from '@shared-types/index';
import i18n, { ResourceStore } from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '.';

const resources = {
  [Language.EN]: {
    translation: {
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      education: 'Education',
      cv: 'CV',
    },
  },
  [Language.KZ]: {
    translation: {
      about: 'Өзім туралы',
      projects: 'Жобалар',
      stack: 'Стэк',
      education: 'Білім',
      cv: 'Резюме',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: config.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
