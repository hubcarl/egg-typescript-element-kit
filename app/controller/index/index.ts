'use strict';
import { Controller } from 'egg';
export default class IndexController extends Controller {

  public async index() {
    const list = this.service.article.getArtilceList(1, 10);
    await this.ctx.render('index/index.js', { list });
  }

  public async client() { // 前端渲染
    const list = this.service.article.getArtilceList(1, 10);
    await this.ctx.renderClient('index/index.js', { list });
  }

  public async list() {
    const { pageIndex, pageSize } = this.ctx.query;
    this.ctx.body = this.service.article.getArtilceList(1, 10);
  }

  public async detail() {
    const id = this.ctx.query.id;
  }
}