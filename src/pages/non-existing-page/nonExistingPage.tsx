import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '@config/index';

import { wrapperStyles } from './nonExistingPage.styles';

const NonExistingPage = () => {
  const { t } = useTranslation();

  return (
    <div css={wrapperStyles}>
      <img alt="" className="no-page-image" src={config.urls[404]} />
      <div className="no-page-text">{t('noPage')}</div>
    </div>
  );
};

export { NonExistingPage };
