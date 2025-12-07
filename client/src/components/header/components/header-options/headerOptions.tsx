import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import config from '@config/index';
import { routes } from '@router';

import { headerOptionsStyles } from './headerOptions.styles';
import { IHeaderOptionsProps } from './headerOptions.types';

const HeaderOptions = ({ onClick }: IHeaderOptionsProps): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div css={headerOptionsStyles}>
      <Link
        className={`${routes.about.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.about.path}
        onClick={onClick}
      >
        {t('about.header')}
      </Link>
      <Link
        className={`${routes.projects.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.projects.path}
        onClick={onClick}
      >
        {t('projects')}
      </Link>
      <Link
        className={`${routes.education.path === location.pathname ? 'active' : ''} page-link`}
        to={routes.education.path}
        onClick={onClick}
      >
        {t('education.header')}
      </Link>
      <a className="page-link" href={config.urls.cv} download target="_blank" rel="noreferrer">
        {t('cv')}
      </a>
    </div>
  );
};

export { HeaderOptions };
