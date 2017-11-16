'use strict';

class Question {
  constructor() {
    this.save();
  }

  save() {
    console.log(this.constructor)
    return this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }
}

Question._All = [];
