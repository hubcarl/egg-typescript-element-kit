'use strict';
import { Controller } from 'egg';
export default class CategoryController extends Controller {
  async index() {
    await this.ctx.render('category/category.js', { message: 'Egg + TypeScript: Category'});
  }
}