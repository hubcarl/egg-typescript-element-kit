'use strict';
import { Controller } from 'egg';
export default class IndexController extends Controller {

  public async index() {
    // const result = this.service.article.getArtilceList(null, null, null, 1, 10);
    // await this.ctx.render('index/index.js', result);
  }

  public async client() { // 前端渲染
    // const result = this.service.article.getArtilceList(null, null, null, 1, 10);
    // await this.ctx.renderClient('index/index.js', result);
  }

  public async list() {
    // const { pageIndex, pageSize } = this.ctx.query;
    // this.ctx.body = this.service.article.getArtilceList(null, null, null, pageIndex, pageSize);
  }

  public async detail() {
    const id = this.ctx.query.id;
  }
}