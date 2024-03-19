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
            'todo_list',
            'root',
            '',
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        )
    }

    async isConnected(){
        try {
            await this._driver.authenticate();
            return true;
        } catch (error) {
            console.error('Fail!', error);
            return false
        }
    }


}

module.exports = MySQL;