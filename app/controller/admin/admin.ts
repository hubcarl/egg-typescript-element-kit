import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';
import Article from '../../model/article';
export default class AdminController extends Controller {

  public async login() {
    await this.ctx.renderClient('admin/login/login.js', {});
  }

  public async home() {
    await this.ctx.render('admin/home/home.js', { url: this.ctx.url.replace(/\/admin/, '') });
  }

  public async list() {
    const { title, cagetoryId, tag, pageIndex, pageSize } = this.ctx.request.body;
    const list = this.service.article.getArtilceList(title, cagetoryId, tag, pageIndex, pageSize);
    this.ctx.body = list;
  }

  public async add() {
    const article = this.ctx.request.body;
    this.ctx.body = this.service.article.saveArticle(article);
  }

  public async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = Model.getDetail(id);
  }
}