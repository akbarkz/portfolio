import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@components/layout';
import { routes } from '@router';

import { appStyles } from './app.styles';
import { Theme } from './theme';

const App = () => (
  <Theme>
    <div css={appStyles}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {Object.values(routes).map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </Theme>
);

export { App };
