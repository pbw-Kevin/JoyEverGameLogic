class BasicRole{
    constructor(info){
        this.info=info;
    }
    getInfo(){
        return this.info;
    }
}

import * as Module from './mod.js'

Module.Import(BasicRole);

var a = new Module.Role1("Star Jazz");
a.log();