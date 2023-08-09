import Link from 'antd/es/typography/Link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '@config/index';

import { headerOptionsStyles } from './headerOptions.styles';

const HeaderOptions = () => {
  const { t } = useTranslation();

  return (
    <div css={headerOptionsStyles}>
      <Link className="page-link" href="/about">
        {t('about')}
      </Link>
      <Link className="page-link" href="/projects">
        {t('projects')}
      </Link>
      <Link className="page-link" href="/stack">
        {t('stack')}
      </Link>
      <Link className="page-link" href="/education">
        {t('education')}
      </Link>
      <Link className="page-link" href={config.urls.cv} download>
        {t('cv')}
      </Link>
    </div>
  );
};

export { HeaderOptions };
