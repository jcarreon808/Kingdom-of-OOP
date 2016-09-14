const Animal = require ('./Animal');

module.exports = class BiLateral extends Animal{
  constructor(name,body){
    super(name, 'bilateral', body);
    this._body = body;
  }
  get body(){
    return `${this._body}`;
  }
  set body(body){
    this._body = body;
  }
};