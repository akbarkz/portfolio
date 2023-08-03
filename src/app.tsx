import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { appStyles } from './app.styles';
import router from './router';
import { Theme } from './theme';

const App = () => (
  <Theme>
    <div css={appStyles}>
      <Layout>
        <Header />
        <Content>
          <RouterProvider router={router} />
        </Content>
        <Footer />
      </Layout>
    </div>
  </Theme>
);

export { App };
