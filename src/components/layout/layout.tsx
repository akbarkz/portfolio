import AntLayout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

const Layout = () => (
  <AntLayout>
    <Header />
    <Outlet />
    <Footer />
  </AntLayout>
);

export { Layout };
