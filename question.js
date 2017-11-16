'use strict';

class Question {
  constructor(content) {
    this.content = content;
    this.save();
  }

  save() {
    return this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(index) {
    return this.All()[index - 1]
  }
}

Question._All = [];
