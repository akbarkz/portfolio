import React from 'react';
import ReactDOM from 'react-dom/client';

import { translationsLoaded } from '@config/translations';

import { App } from './app';

// Wait for translations to load before rendering the app
translationsLoaded.then(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ) as any
  );
});
