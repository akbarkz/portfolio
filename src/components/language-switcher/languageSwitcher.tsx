import { Language } from '@shared-types/index';
import { Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import config from '@config/index';

const options = [
  {
    value: Language.EN,
    label: 'Eng',
  },
  {
    value: Language.KZ,
    label: 'Қаз',
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(null);

  const handleLngChange = useCallback((value: Language) => {
    i18n.changeLanguage(value);
    localStorage.setItem('language', value);
    setLanguage(value);
  }, []);

  useEffect(() => {
    const persistedValue = localStorage.getItem('language');
    if (persistedValue && persistedValue !== config.defaultLanguage) {
      setLanguage(persistedValue as Language);
      i18n.changeLanguage(persistedValue);
    } else {
      setLanguage(config.defaultLanguage);
    }
  }, []);

  return <Select options={options} value={language} onChange={handleLngChange} />;
};

export { LanguageSwitcher };
