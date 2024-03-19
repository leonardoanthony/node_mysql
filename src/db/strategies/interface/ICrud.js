class NotImplementedException extends Exception {
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

    create(task){
        throw new NotImplementedException();
    }

    read(params){
        throw new NotImplementedException();
    }
    
    update(id, newTask){
        throw new NotImplementedException();
    }
    
    delete(id){
        throw new NotImplementedException();
    }

    completeTask(id){
        throw new NotImplementedException();
    }   

}