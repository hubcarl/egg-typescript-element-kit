import FileDB from './lib/db';

import IndexController from './controller/index/index';
import CategoryController from './controller/category/category';
import AboutController from './controller/about/about';
import AdminController from './controller/admin/admin';

import ArticleService from './service/article';

declare module 'egg' {
  interface Application {
    db: any
  }

  interface Context {
    db: any
  }

  interface IController {
    index:{
      index: IndexController
    },
    category:{
      category: CategoryController
    },
    about: {
      about: AboutController
    },
    admin: {
      admin:AdminController,
    }
  }

  interface IService {
    article: ArticleService;
  }

  function startCluster(options: any)
}