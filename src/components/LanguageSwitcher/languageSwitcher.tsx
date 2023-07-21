import { Language } from '@shared-types/index';
import { Select, MenuProps } from 'antd';
import React, { useCallback } from 'react';
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

  const handleLngChange = useCallback((value: Language) => {
    i18n.changeLanguage(value);
  }, []);

  return (
    <Select options={options} defaultValue={config.defaultLanguage} onChange={handleLngChange} />
  );
};

export { LanguageSwitcher };
