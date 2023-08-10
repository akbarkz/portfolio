import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return <p>{t('underDevelopment')}</p>;
};

export { About };
