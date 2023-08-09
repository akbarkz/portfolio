import Link from 'antd/es/typography/Link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '@config/index';
import { routes } from '@router';

import { headerOptionsStyles } from './headerOptions.styles';

const HeaderOptions = () => {
  const { t } = useTranslation();

  return (
    <div css={headerOptionsStyles}>
      <Link className="page-link" href={routes.about.path}>
        {t('about')}
      </Link>
      <Link className="page-link" href={routes.projects.path}>
        {t('projects')}
      </Link>
      <Link className="page-link" href={routes.stack.path}>
        {t('stack')}
      </Link>
      <Link className="page-link" href={routes.education.path}>
        {t('education')}
      </Link>
      <Link className="page-link" href={config.urls.cv} download>
        {t('cv')}
      </Link>
    </div>
  );
};

export { HeaderOptions };
