import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
export default class FileDB{
  public instance;
  constructor(name : string = 'blog.json'){
    const file = new FileSync(name);
    this.instance = lowdb(file);
    this.create();
  }

  create(){
    this.instance.defaults({ article: [], user: {} }).write();
  }

  insert(collectionName : string, json : Object){
    this.instance.get(collectionName).push(json).write();
  }
}