import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import config from '@config/index';

import { logoStyles } from './logo.styles';
import { ILogo } from './logo.types';

const Logo = ({ closeDrawer }: ILogo) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    navigate('/');
    closeDrawer && closeDrawer();
  }, [closeDrawer]);

  return (
    <img
      css={logoStyles}
      src={config.urls.logo}
      title={t('home')}
      width={50}
      onClick={handleLogoClick}
    />
  );
};

export { Logo };
