import { IProject } from '@shared-types/index';

import { stack } from './stack';

export const projects: IProject[] = [
  {
    name: 'Athenian SAS',
    dateStart: '2021-02-01',
    dateEnd: '2023-05-01',
    position: 'position.seniorLead',
    stack: [
      stack.react,
      stack.ts,
      stack.react_query,
      stack.sass,
      stack.emotion,
      stack.storybook,
      stack.vite,
      stack.jest,
      stack.cypress,
      stack.docker,
      stack.rest,
      stack.git,
    ],
    location: 'location.fr',
    link: 'https://athenian.com/',
    description: [
      'description.athenian.p1',
      'description.athenian.p2',
      'description.athenian.p3',
      'description.athenian.p4',
    ],
    achievements: [
      'achievements.athenian.p1',
      'achievements.athenian.p2',
      'achievements.athenian.p3',
    ],
    images: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691226052/portfolio/project_screens/athenian/1-min_dbk402.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691226050/portfolio/project_screens/athenian/2-min_vsv5s4.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691226050/portfolio/project_screens/athenian/3-min_boo56u.png',
    ],
    smallImages: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693194671/portfolio/project_screens/athenian/1-min-small_gmd0bz.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693194672/portfolio/project_screens/athenian/2-min-small_qaspce.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693194671/portfolio/project_screens/athenian/3-min-small_n8jzzf.png',
    ],
  },
  {
    name: 'LuggageCare BV',
    dateStart: '2019-11-01',
    dateEnd: '2021-01-01',
    position: 'position.seniorLead',
    stack: [
      stack.react,
      stack.redux,
      stack.sc,
      stack.storybook,
      stack.webpack,
      stack.jest,
      stack.rtl,
      stack.docker,
      stack.rest,
      stack.git,
      stack.python,
      stack.django,
      stack.postgres,
    ],
    location: 'location.ams',
    link: 'https://www.luggo.nl/',
    description: [
      'description.luggo.p1',
      'description.luggo.p2',
      'description.luggo.p3',
      'description.luggo.p4',
    ],
    achievements: ['achievements.luggo.p1', 'achievements.luggo.p2', 'achievements.luggo.p3'],
    images: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691327151/portfolio/project_screens/luggo/1-min_ggnmb7.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691327151/portfolio/project_screens/luggo/2-min_ycns7z.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691327151/portfolio/project_screens/luggo/3-min_hj3yxo.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691327151/portfolio/project_screens/luggo/4-min_vnuqhx.png',
    ],
    smallImages: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197453/portfolio/project_screens/luggo/1-min-small_qeb64e.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197452/portfolio/project_screens/luggo/2-min-small_gi6jd2.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197453/portfolio/project_screens/luggo/3-min-small_pp1mu9.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197453/portfolio/project_screens/luggo/4-min-small_hszjzb.png',
    ],
  },
  {
    name: 'Frontmen BV (Jumbo Supermarkten BV)',
    dateStart: '2018-07-01',
    dateEnd: '2019-08-01',
    position: 'position.senior',
    stack: [
      stack.vue,
      stack.vuex,
      stack.sass,
      stack.storybook,
      stack.webpack,
      stack.jest,
      stack.rtl,
      stack.docker,
      stack.rest,
      stack.gql,
      stack.apollo,
      stack.node,
      stack.git,
    ],
    location: 'location.ein',
    link: 'https://www.jumbo.com/',
    description: ['description.jumbo.p1', 'description.jumbo.p2', 'description.jumbo.p3'],
    achievements: ['achievements.jumbo.p1', 'achievements.jumbo.p2', 'achievements.jumbo.p3'],
    images: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691473185/portfolio/project_screens/jumbo/1-min_qmzz7z.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691473184/portfolio/project_screens/jumbo/2-min_vrins6.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1691473185/portfolio/project_screens/jumbo/3-min_qopiqe.png',
    ],
    smallImages: [
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197697/portfolio/project_screens/jumbo/1-min-small_ubleky.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197697/portfolio/project_screens/jumbo/2-min-small_um4izy.png',
      'https://res.cloudinary.com/dlyw63h5s/image/upload/v1693197697/portfolio/project_screens/jumbo/3-min-small_djvaq5.png',
    ],
  },
  {
    name: 'Vue Storefront',
    dateStart: '2017-12-01',
    dateEnd: '2018-10-01',
    position: 'position.core',
    stack: [
      stack.vue,
      stack.ts,
      stack.vuex,
      stack.sass,
      stack.webpack,
      stack.docker,
      stack.node,
      stack.gql,
      stack.git,
    ],
    location: 'Open Source on Github',
    link: 'https://vuestorefront.io/',
    description: ['description.vueStorefront.p1', 'description.vueStorefront.p2'],
  },
  {
    name: 'Infit-IT Solutions',
    dateStart: '2017-10-01',
    dateEnd: '2018-07-01',
    position: 'position.seniorLead',
    stack: [
      stack.react,
      stack.ts,
      stack.redux,
      stack.sass,
      stack.webpack,
      stack.docker,
      stack.rest,
      stack.git,
    ],
    location: 'location.kz',
    link: 'https://infin-it.kz/',
    description: ['description.infitIt.p1'],
    achievements: ['achievements.infinIt.p1', 'achievements.infinIt.p2', 'achievements.infinIt.p3'],
  },
  {
    name: 'Kaspi Bank',
    dateStart: '2016-04-01',
    dateEnd: '2017-10-01',
    position: 'position.be',
    stack: [
      stack.python,
      stack.django,
      stack.postgres,
      stack.docker,
      stack.react_native,
      stack.redux,
      stack.webpack,
      stack.git,
    ],
    location: 'location.kz',
    link: 'https://kaspi.kz/',
    description: ['description.kaspi.p1'],
    achievements: ['achievements.kaspi.p1', 'achievements.kaspi.p2', 'achievements.kaspi.p3'],
  },
];
