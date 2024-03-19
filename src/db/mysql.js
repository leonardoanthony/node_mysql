const { Sequelize } = require("sequelize");
const ICrud = require("./strategies/interface/ICrud");

class MySQL extends ICrud{
    constructor(){
        super();
        this._driver = null;
        this._tarefas = null;
    }

    connect(){
        this._driver = new Sequelize(
            'tarefas',
            'root',
            '',
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        )
    }


}

module.exports = MySQL;