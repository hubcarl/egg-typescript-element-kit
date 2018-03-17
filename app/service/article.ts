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
    return this.colllection.getPager(condition);
  }

  public saveArticle(data: object) {
    const article: Article = deserialize(Article, data);
    return this.colllection.add(article);
  }
}
