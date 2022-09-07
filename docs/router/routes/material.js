const components = require
  .context('../../views/material', false, /\.md$/)
  .keys();
let routes = [];

components.forEach(component => {
  let name = component.split('/')[1].split('.')[0];
  routes.push({
    name: `material-${name}`,
    path: `/material/${name}`,
    component: () => import(`../../views/material/${name}.md`)
  });
});

export default routes;
