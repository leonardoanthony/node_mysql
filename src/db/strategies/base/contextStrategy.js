const ICrud = require("../interface/ICrud");



class ContextStrategy extends ICrud{
    constructor(strategy){
        super();
        this._database = strategy;
    }

    add(task){
        return this._database.add(task);
    }
    list(){
        return this._database.list();
    }
    edit(){
        return this._database.edit();
    }
    delete(){
        return this._database.delete();
    }
    completeTask(){
        return this._database.completeTask();
    }
    connect(){
        return this._database.connect();
    }
    isConnected(){
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;