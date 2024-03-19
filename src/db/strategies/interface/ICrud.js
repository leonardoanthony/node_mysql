class NotImplementedException extends Error {
    constructor(){
        super("Not Implemented Exception")
    }
}

class ICrud{

    connect(){
        throw new NotImplementedException();
    }

    isConnected(){
        throw new NotImplementedException();
    }

    add(task){
        throw new NotImplementedException();
    }

    list(params){
        throw new NotImplementedException();
    }
    
    edit(id, newTask){
        throw new NotImplementedException();
    }
    
    delete(id){
        throw new NotImplementedException();
    }

    completeTask(id){
        throw new NotImplementedException();
    }   

}

module.exports = ICrud;