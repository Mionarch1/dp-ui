export default [
  {
    name: 'guide',
    path: '/guide',
    component: () => import('@docs/views/guide/index.md')
  },
  {
    name: 'guide-icon',
    path: '/guide/icon',
    component: () => import('@docs/views/guide/icon')
  }
];
