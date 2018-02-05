import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';
export default class AdminController extends Controller {

  public async login() {
    await this.ctx.render('admin/login/login.js', {});
  }

  public async home() {
    await this.ctx.render('admin/home/home.js', { url: this.ctx.url.replace(/\/admin/, '') });
  }

  public async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  public async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = Model.getDetail(id);
  }
}