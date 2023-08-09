import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@components/layout';

import { appStyles } from './app.styles';
import routes from './router';
import { Theme } from './theme';

const App = () => (
  <Theme>
    <div css={appStyles}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </Theme>
);

export { App };
