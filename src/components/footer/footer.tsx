import { Divider } from 'antd';
import { Footer as AntFooter } from 'antd/es/layout/layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@components/language-switcher';

import { dividerStyles, footerStyles } from './footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Divider css={dividerStyles} />
      <AntFooter css={footerStyles}>
        © {t('footerText')}
        <LanguageSwitcher />
      </AntFooter>
    </>
  );
};

export { Footer };
