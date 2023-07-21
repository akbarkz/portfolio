import { createBrowserRouter } from 'react-router-dom';

import { About } from '@pages/about';
import { Main } from '@pages/main';

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
