import * as Model from '../../mocks/article/list';
import { Controller } from 'egg';
export default class AdminController extends Controller {
  
  async login() {
    await this.ctx.render('admin/login/login.js', {});
  }

  async home() {
    await this.ctx.render('admin/home/home.js', { url: this.ctx.url.replace(/\/admin/, '') });
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = Model.getDetail(id);
  }
}