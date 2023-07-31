import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import router from './router';
import { Theme } from './theme';

const App = () => (
  <Theme>
    <Layout>
      <Header />
      <Content>
        <RouterProvider router={router} />
      </Content>
      <Footer />
    </Layout>
  </Theme>
);

export { App };
