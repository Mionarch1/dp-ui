import router from '../router';

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/desktop/quickly');
  }
  next()
});
