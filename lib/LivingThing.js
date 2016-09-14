
module.exports = class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual,mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
  get name (){
    return this._name;
  }

  set name(name){
    if(typeof(name) === 'string'){
      this._name = name;
    }else{
      throw new TypeError('LivingThing.name must be a string');
    }
  }

  get uniCellular(){
    if (this._uniCellular === true){
      return true;
    }else{
      return false;
    }
  }

  set uniCellular (uniCellular){
      this._uniCellular = uniCellular;
  }

  get multiCellular(){
    if (this.uniCellular === false){
      return true;
    }else{
      return false;
    }
  }

  set multiCellular(uniCellular){
    if (uniCellular === true){
      this._uniCellular = false;
  }else{
      this._uniCellular = true;
  }
}

  get eukaryote(){
    if (this._trueNucleus === true){
      return true;
    }else{
      return false;
    }
  }

  set eukaryote(trueNucleus){
    this._trueNucleus = trueNucleus;
  }

  get prokaryote(){
    if (this._trueNucleus === true){
      return false;
    }else{
      return  true;
    }
  }

  set prokaryote(trueNucleus){
    if(trueNucleus === true){
    this._trueNucleus = false;
    }else{
      this._trueNucleus =true;
    }
  }

  get anaerobic(){
    if(this._anaerobic === true){
      return true;
    }else{
      return false;
    }
  }

// - should have a method named `anaerobic` that sets the value of the private property `_anaerobic`
  set anaerobic(anaerobic){
    if(anaerobic === true){
      this._anaerobic = true;
    }else{
      this._anaerobic = false;
    }
  }
// - should have a method named `aerobic` that returns a boolean value based on the private property `_anaerobic`
  get aerobic(){
    if (this._anaerobic === true){
      return false;
    }else{
      return true;
    }
  }
// - should have a method named `aerobic` that sets the value of the private property `_anaerobic`

  set aerobic(anaerobic){
    if (anaerobic === false){
      this._anaerobic = true;
    }else{
      this._anaerobic = false;
    }
  }
// - should have a method named `asexual` that returns a boolean value based on the private property `_asexual`

  get asexual(){
    if (this._asexual === true){
      return true;
    }else{
      return false;
    }
  }
// - should have a method named `asexual` that sets the value of the private property `_asexual`
  set asexual(asexual){
    if (asexual ===  true){
      this._asexual = true;
    }else{
      this._asexual = false;
    }
  }
// - should have a method named `sexual` that returns a boolean value based on the private property `_asexual`
  get sexual (){
    if (this._asexual === true){
      return false;
    }else{
      return true;
    }
  }
// - should have a method named `sexual` that sets the value of the private property `_asexual`
  set sexual(asexual){
    if (asexual===true){
      this._asexual = false;
    }else{
      this._asexual = true;
    }
  }
// - should have a method named `mobile` that returns a boolean value based on the private `_mobile`
  get mobile(){
    if (this._mobile === true){
      return true;
    }else{
      return false;
    }
  }
// - should have a method named `mobile` that sets the value of the private `_mobile`
  set mobile(mobile){
    this._mobile = mobile;
  }
// - should have a method named `immobile` that returns a boolean value based on the private `
  get immobile(){
    if(this._mobile === true){
      return false;
    }else{
      return true;
    }
  }
// - should have a method named `immobile` that sets the value of the private `_mobile`
  set immobile(mobile){
    if (mobile === true){
      this._mobile = false;
    }else{
      this._mobile = true;
    }
  }

};