import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import config from '@config/index';
import { routes } from '@router';

import { headerOptionsStyles } from './headerOptions.styles';

const HeaderOptions = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div css={headerOptionsStyles}>
      <Link
        className={`${routes.about.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.about.path}
      >
        {t('about.header')}
      </Link>
      <Link
        className={`${routes.projects.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.projects.path}
      >
        {t('projects')}
      </Link>
      <Link
        className={`${routes.education.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.education.path}
      >
        {t('education.header')}
      </Link>
      <a className="page-link" href={config.urls.cv} download>
        {t('cv')}
      </a>
    </div>
  );
};

export { HeaderOptions };
