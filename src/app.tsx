import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import router from './router';

const App = () => (
  <Layout>
    <Header />
    <Content>
      <RouterProvider router={router} />
    </Content>
    <Footer />
  </Layout>
);

export { App };
