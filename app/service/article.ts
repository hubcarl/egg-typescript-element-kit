import { Context, Service } from 'egg';
import { deserialize } from 'json-typescript-mapper';
import Colllection from '../lib/db/collection';
import Article from '../model/article';
const ARTICLE_COLLECTION = Symbol.for('ArticeService#Collection');

export default class ArticeService extends Service {
  private colllection: Colllection;
  constructor(ctx: Context) {
    super(ctx);
    this.ctx = ctx;
    this.colllection = new Colllection(ctx.db, 'article');
  }

  public getArtilceList(title: string, cagetoryId: number, tag: string, pageIndex: number = 1, pageSize: number = 10) {
    return this.colllection.getPager({ title, cagetoryId, tag }, pageIndex, pageSize);
  }

  public saveArticle(data: object) {
    const article: Article = deserialize(Article, data);
    return this.colllection.add(article);
  }
}
