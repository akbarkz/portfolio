import { About } from '@pages/about';
import { Education } from '@pages/education';
import { Main } from '@pages/main';
import { NonExistingPage } from '@pages/non-existing-page';
import { Projects } from '@pages/projects';

export const routes = {
  main: {
    path: '/',
    element: <Main />,
  },
  about: {
    path: '/about',
    element: <About />,
  },
  projects: {
    path: '/projects',
    element: <Projects />,
  },
  education: {
    path: '/education',
    element: <Education />,
  },
  cv: {
    path: '*',
    element: <NonExistingPage />,
  },
};
