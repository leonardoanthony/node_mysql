
class ContextStrategy extends ICrud{
    constructor(strategy){
        super();
        this._database = strategy;
    }

    add(){
        return this._database.add();
    }
}