import React from 'react';
import { useTranslation } from 'react-i18next';

import { wrapperStyles } from './about.styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <div css={wrapperStyles}>
      <h1>{t('about.header')}</h1>
      <p>{t('about.p1')}</p>
      <p>{t('about.p2')}</p>
      <p>{t('about.p3')}</p>
      <p>{t('about.p4')}</p>
    </div>
  );
};

export { About };
