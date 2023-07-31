import { createBrowserRouter } from 'react-router-dom';

import { About } from '@pages/about';
import { Main } from '@pages/main';
import { NonExistingPage } from '@pages/non-existing-page';
import { Projects } from '@pages/projects';

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '*',
    element: <NonExistingPage />,
  },
]);
