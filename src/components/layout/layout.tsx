import AntLayout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { contentStyles } from './layout.styles';

const Layout = () => (
  <AntLayout>
    <Header />
    <div css={contentStyles}>
      <Outlet />
    </div>
    <Footer />
  </AntLayout>
);

export { Layout };
