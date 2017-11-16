'use strict';

class Question {
  constructor(string) {
    this.string = string;
    this.save();
  }

  save() {
    return this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(index) {
     return this.All()[index]
  }
}

Question._All = [];
