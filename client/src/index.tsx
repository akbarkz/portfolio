import React from 'react';
import ReactDOM from 'react-dom/client';

import '@config/translations';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
