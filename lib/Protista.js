const Eukaryota = require ('./Eukaryota');

module.exports = class Protista extends Eukaryota{
  constructor(name, uniCellar, mobile, heterotroph){
    super(name, uniCellar, true, mobile, heterotroph);
  }
};