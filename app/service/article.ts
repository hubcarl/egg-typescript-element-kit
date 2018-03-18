import { Context, Service } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Colllection from '../lib/db/collection';
import Article from '../model/article';
import Condition from '../lib/condition';
const ARTICLE_COLLECTION = Symbol.for('ArticeService#Collection');

export default class ArticeService extends Service {
  private colllection: Colllection;
  constructor(ctx: Context) {
    super(ctx);
    this.ctx = ctx;
    this.colllection = new Colllection(ctx.db, 'article');
  }

  public getArtilceList(condition: Condition) {
    if (condition.categoryId) {
      condition.where.categoryId = condition.categoryId;
    }
    if (condition.status) {
      condition.where.status = condition.status;
    }
    if (condition.title) {
      condition.like.title = condition.title;
    }
    return this.colllection.getPager(condition);
  }

  public saveArticle(data: object) {
    const article: Article = deserialize(Article, data);
    if (article.id) {
      return this.colllection.update({ id: article.id }, article);
    }
    article.id = this.ctx.db.getUniqueId();
    return this.colllection.add(article);
  }
}
