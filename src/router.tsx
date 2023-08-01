import { createBrowserRouter } from 'react-router-dom';

import { About } from '@pages/about';
import { Education } from '@pages/education';
import { Main } from '@pages/main';
import { NonExistingPage } from '@pages/non-existing-page';
import { Projects } from '@pages/projects';
import { Stack } from '@pages/stack';

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
    path: '/stack',
    element: <Stack />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '*',
    element: <NonExistingPage />,
  },
]);
