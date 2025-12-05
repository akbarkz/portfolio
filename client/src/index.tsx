import React from 'react';
import ReactDOM from 'react-dom/client';

import { translationsLoaded } from '@config/translations';

import { App } from './app';

// Wait for translations to load before rendering the app
translationsLoaded.then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
