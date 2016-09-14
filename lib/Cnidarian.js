const Animal = require ('./Animal');

module.exports = class Cnidairan extends Animal{
  constructor(name,body){
    super(name, 'radial');
    this._body = body;
  }

};