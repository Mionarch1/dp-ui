const components = require.context('../../views', false, /\.md$/).keys();
let routes = [];

components.forEach(component => {
  let name = component.split('/')[1].split('.')[0];
  const isRoot = name === 'quickly';
  routes.push({
    name,
    path: isRoot ? '/' : `/${name}`,
    component: () => import(`../../views/${name}.md`)
  });
});

export default routes;

