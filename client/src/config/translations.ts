import { Language } from '@shared-types/index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '.';

// Get API URL from environment variable or default
const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:5001';

// Initialize i18n with empty resources
i18n.use(initReactI18next).init({
  resources: {},
  lng: config.defaultLanguage,
  fallbackLng: Language.EN,
  interpolation: {
    escapeValue: false,
  },
});

// Fetch translations from backend API
async function loadTranslations() {
  try {
    const response = await fetch(`${API_URL}/api/translations`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const resources = await response.json();

    // Add each language's translations to i18next
    Object.keys(resources).forEach((lang) => {
      if (resources[lang]?.translation) {
        i18n.addResourceBundle(
          lang,
          'translation',
          resources[lang].translation,
          true, // deep merge
          true // overwrite
        );
      }
    });
  } catch (error) {
    console.error('✗ Failed to load translations from backend:', error);

    // Fallback to minimal translations if backend is unavailable
    const fallbackTranslations = {
      projects: 'Projects',
      stack: 'Stack',
      cv: 'CV',
      noPage: 'Looks like the page you are trying to open does not exist.',
      home: 'Back to Home page',
      underDevelopment: 'This page is currently under development...',
      footerText: 'Akbar Abdrakhmanov 2023',
    };

    i18n.addResourceBundle(Language.EN, 'translation', fallbackTranslations, true, true);
  }
}

// Export the promise so we can wait for it before rendering
export const translationsLoaded = loadTranslations();

export default i18n;
