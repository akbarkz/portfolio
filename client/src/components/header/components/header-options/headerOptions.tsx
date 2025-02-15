import Link from 'antd/es/typography/Link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

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
        href={routes.about.path}
      >
        {t('about.header')}
      </Link>
      <Link
        className={`${routes.projects.path === location.pathname ? 'active' : ''} page-link`}
        href={routes.projects.path}
      >
        {t('projects')}
      </Link>
      <Link
        className={`${routes.education.path === location.pathname ? 'active' : ''} page-link`}
        href={routes.education.path}
      >
        {t('education.header')}
      </Link>
      <Link className="page-link" href={config.urls.cv} download>
        {t('cv')}
      </Link>
    </div>
  );
};

export { HeaderOptions };
