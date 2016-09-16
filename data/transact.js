class Transact() {
  constructor() {
    this.transactData = [];
  }

  setVars(vars) {
    // where vars is an array of hashes like {var:"variable", val:"value"}
     vars.forEach((element, index, array) => {
       var elVar = "__"+element.var;
        if(this.transactData[elVar]) {
            if (this.transactData[index].val != element.val) {
              this.transactData[index].updated = false;
            }
        }
        this.transactData[index].var = element.val;
      }
    }

    updateVars(object) {
      this.transactData.forEach((element, index, array) => {
        if (!element.updated) {
          object[element.var] = object[element.var].val;
          element.udpated = true;
      })
    }
}
