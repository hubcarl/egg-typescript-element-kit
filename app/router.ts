
import { Application } from 'egg';

export default (application: Application) => {
  const { router, controller } = application;
  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/list', controller.index.index.list);
  router.get('/category', controller.category.category.index);
  router.get('/about', controller.about.about.index);
  router.get('/login', controller.admin.admin.login);
  router.get('/admin/api/article/list', controller.admin.admin.list);
  router.get('/admin/api/article/:id', controller.admin.admin.detail);
  router.get('/admin(/.+)?', controller.admin.admin.home);
};