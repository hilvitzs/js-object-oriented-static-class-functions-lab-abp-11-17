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
    console.log(this.All()[index + 1])
  }
}

Question._All = [];
