// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import AboutAbout from '../../../app/controller/about/about';
import AdminAdmin from '../../../app/controller/admin/admin';
import CategoryCategory from '../../../app/controller/category/category';
import IndexIndex from '../../../app/controller/index/index';

declare module 'egg' {
  interface IController {
    about: {
      about: AboutAbout;
    };
    admin: {
      admin: AdminAdmin;
    };
    category: {
      category: CategoryCategory;
    };
    index: {
      index: IndexIndex;
    };
  }
}
