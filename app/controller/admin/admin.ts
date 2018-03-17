import { Controller } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Article from '../../model/article';
import Condition from '../../lib/condition';
export default class AdminController extends Controller {

  public async login(ctx) {
    await ctx.renderClient('admin/login/login.js', {});
  }

  public async home(ctx) {
    await ctx.render('admin/home/home.js', { url: this.ctx.url.replace(/\/admin/, '') });
  }

  public async list(ctx) {
    const condition = deserialize(Condition, ctx.request.body);
    console.log(condition);
    this.ctx.body = ctx.service.article.getArtilceList(condition);
  }

  public async add(ctx) {
    const article = deserialize(Article, ctx.request.body);
    ctx.body = this.service.article.saveArticle(article);
  }

  public async detail(ctx) {
    const id = ctx.query.id;
    ctx.body = {};
  }
}