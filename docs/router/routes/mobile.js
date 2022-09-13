const components = require
  .context('../../views/mobile', false, /\.md$/)
  .keys();
let routes = [];

components.forEach(component => {
  let name = component.split('/')[1].split('.')[0];
  routes.push({
    name: `mobile-${name}`,
    path: `/mobile/${name}`,
    component: () => import(`../../views/mobile/${name}.md`)
  });
});

export default routes;
