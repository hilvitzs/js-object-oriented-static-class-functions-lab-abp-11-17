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

  static Find() {
    return this.All().filter(function(question) {
      console.log(question)
      }
    })
  }
}

Question._All = [];
