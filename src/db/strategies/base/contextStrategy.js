const ICrud = require("../interface/ICrud");



class ContextStrategy extends ICrud{
    constructor(strategy){
        super();
        this._database = strategy;
    }

    add(task){
        return this._database.add(task);
    }
    list(query){
        return this._database.list(query);
    }
    edit(id, newTask){
        return this._database.edit(id, newTask);
    }
    delete(id){
        return this._database.delete(id);
    }
    completeTask(id){
        return this._database.completeTask(id);
    }
    connect(){
        return this._database.connect();
    }
    isConnected(){
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;