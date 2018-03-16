import DB from './base';
export default class Collection {
  private db: DB;
  private name: string;
  constructor(db: DB, name: string) {
    this.db = db;
    this.name = name;
  }

  public get() {
    return this.db.get(this.name);
  }

  public pager(where: object, pageIndex: number = 1, pageSize: number = 10,
                      orderByField: string = 'id', orderBy: string = 'desc') {
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;
    const result = this.get().orderBy(orderByField, orderBy);
    const total = result.size();
    const list = result.slice(start, end).value();
    return { total, list };
  }

  public getOrderAscByField(field: string) {
    return this.get().orderBy(field, 'asc').value();
  }

  public getOrderDescByField(field: string) {
    return this.get().orderBy(field, 'desc').value();
  }

  public insert(json: object) {
    return this.db.insert(this.name, json);
  }
}