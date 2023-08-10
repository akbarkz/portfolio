import React from 'react';
import { useTranslation } from 'react-i18next';

const Stack = () => {
  const { t } = useTranslation();

  return <p>{t('underDevelopment')}</p>;
};

export { Stack };
