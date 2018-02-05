import { Context, Service } from 'egg';

export default class ArticeService extends Service {
  public collection;
  constructor(ctx: Context) {
    super(ctx);
    this.collection = ctx.db.instance.get('article');
  }

  public getArtilceList(pageIndex: number = 1, pageSize: number = 10) {
    return this.collection.value();
  }
}
