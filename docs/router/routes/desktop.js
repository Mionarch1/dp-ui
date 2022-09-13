const components = require
  .context('../../views/desktop', false, /\.md$/)
  .keys();
let routes = [];

components.forEach(component => {
  let name = component.split('/')[1].split('.')[0];
  routes.push({
    name: `desktop-${name}`,
    path: `/desktop/${name}`,
    component: () => import(`../../views/desktop/${name}.md`)
  });
});

export default routes;
