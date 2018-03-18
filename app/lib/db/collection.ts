import DB from './base';
import Condition from '../condition';
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

  public update(where: object, json: object) {
    return this.db.update(this.name, where, json);
  }

  public delete(field: number | string) {
    return this.db.delete(this.name, field);
  }

  public getPager(condition: Condition) {
    return this.db.getPager(this.name, condition);
  }

  public getOrderAscByField(field: string) {
    return this.get().orderBy(field, 'asc').value();
  }

  public getOrderDescByField(field: string) {
    return this.get().orderBy(field, 'desc').value();
  }
}