import FileDB from '../lib/db';
const DBSymbol = Symbol('Application#db');
export default {
  get db(): FileDB {
    if (!this[DBSymbol]) {
      this[DBSymbol] = new FileDB();
    }
    return this[DBSymbol];
  },
};