const ICrud = require("../interface/ICrud");



class ContextStrategy extends ICrud{
    constructor(strategy){
        super();
        this._database = strategy;
    }

    add(){
        return this._database.create();
    }
    list(){
        return this._database.read();
    }
    edit(){
        return this._database.update();
    }
    delete(){
        return this._database.delete();
    }
    connect(){
        return this._database.connect();
    }
    isConnected(){
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;