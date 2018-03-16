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

  public add(json: object) {
    return this.db.add(this.name, json);
  }

  public delete(field: number | string) {
    return this.db.delete(this.name, field);
  }

  public getPager(where: object, pageIndex: number = 1, pageSize: number = 10, orderByField: string = 'id', orderBy: string = 'desc') {
    return this.db.getPager(this.name, where, pageIndex, pageSize, orderByField, orderBy);
  }
}