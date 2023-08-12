import React from 'react';
import { useTranslation } from 'react-i18next';

import { wrapperStyles } from './about.styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <div css={wrapperStyles}>
      <p>{t('aboutText.p1')}</p>
      <p>{t('aboutText.p2')}</p>
      <p>{t('aboutText.p3')}</p>
    </div>
  );
};

export { About };
