import * as lowdb from "lowdb";
import * as lodashid from "lodash-id";
import * as FileSync from "lowdb/adapters/FileSync";
import BaseDB from "./base";
import Condition from "../condition";
export default class FileDB extends BaseDB {
  public instance;
  constructor(name?: string) {
    super(name);
    const file = new FileSync(this.name);
    this.instance = lowdb(file);
    this.instance._.mixin(lodashid);
    this.create();
  }

  public create() {
    this.instance.defaults({ article: [], user: {} }).write();
  }

  public get(collectionName: string) {
    return this.instance.get(collectionName);
  }

  public add(collectionName: string, json: object) {
    return this.get(collectionName)
      .push(json)
      .write();
  }

  public delete(collectionName: string, field: number | string) {
    return this.get(collectionName).write();
  }

  public getPager(collectionName: string, condition: Condition) {
    const {
      where,
      like,
      pageIndex,
      pageSize,
      orderByField,
      orderBy
    } = condition;
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;
    const result = this.get(collectionName)
      .filter(where)
      .filter(item => {
        return Object.keys(like).reduce((isLike, key) => {
          return isLike && item[key] && item[key].contains(like[key]);
        }, true);
      })
      .orderBy(orderByField, orderBy);
    const total = result.size().value();
    const list = result.slice(start, end).value();
    return { total, list };
  }
}
