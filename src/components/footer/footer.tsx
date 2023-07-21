import { Footer as AntFooter } from 'antd/es/layout/layout';
import React from 'react';

import { LanguageSwitcher } from '@components/LanguageSwitcher';

const Footer = () => {
  return (
    <AntFooter>
      <LanguageSwitcher />
    </AntFooter>
  );
};

export { Footer };
