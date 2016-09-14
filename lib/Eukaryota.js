const LivingThing = require ('./LivingThing');

module.exports = class Eukaryota extends LivingThing{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile, heterotroph);
    this._heterotroph =heterotroph;
  }
  get heterotroph(){
    if (this._heterotroph === true){
      return true;
    }else{
      return false;
    }
  }
  set heterotroph(heterotroph){
    if (heterotroph === true){
      this._heterotroph = true;
    }else{
      this._heterotroph = false;
    }
  }
  get autotroph(){
    if(this._heterotroph === true){
      return false;
    }else{
      return true;
    }
  }
  set autotroph(heterotroph){
    if (heterotroph === true){
      this._heterotroph = false;
    }else{
      this._heterotroph = true;
    }
  }
};