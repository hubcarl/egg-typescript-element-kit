'use strict';
import { Controller } from 'egg';
import Condition from '../../lib/condition';
export default class IndexController extends Controller {

  public async index() {
    const condition: Condition = new Condition();
    condition.pageIndex = 1;
    const result = this.service.article.getArtilceList(condition);
    await this.ctx.render('index/index.js', result);
  }

  public async client() { // 前端渲染
    const condition: Condition = new Condition();
    condition.pageIndex = 1;
    const result = this.service.article.getArtilceList(condition);
    await this.ctx.renderClient('index/index.js', result);
  }

  public async list() {
    const { pageIndex, pageSize } = this.ctx.query;
    const condition: Condition = new Condition();
    condition.pageIndex = pageIndex;
    condition.pageSize = pageSize;
    this.ctx.body = this.service.article.getArtilceList(condition);
  }

  public async detail() {
    const id = this.ctx.query.id;
  }
}