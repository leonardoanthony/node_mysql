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

        this.defineModel();
    }

    async defineModel(){
        this._tarefas = this._driver.define('tarefas', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
            },
            descricao: {
                type: Sequelize.STRING,
                require: true,
            }, 
            concluida: {
                type: Sequelize.INTEGER,
                require: true,
                defaultValue: 0
            }

        },{
            tableName: 'tarefas',
            freezeTableName: false,
            timestamps: false
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

    async truncate(){

        await this._tarefas.destroy({
            truncate: true,
        });
    }

    async add(task){
        const {dataValues} = await this._tarefas.create(task);
        delete dataValues.id;
        delete dataValues.concluida;
        return dataValues;
    }

    async list(params = {}){
        const [result] = await this._tarefas.findAll({where: params, raw: true});
        return result;
    }

    async edit(idTask, newTask) {
        const result = await this._tarefas.update({...newTask}, {
            where: {
                id: idTask,
            }
        });

        return result;
    }

    async delete(id){
        const result = await this._tarefas.destroy({
            where: {
                id,
            }
        })

        return result;
    }

    async completeTask(id){
        const result = await this._tarefas.update({concluida: 1}, {
            where: {
                id
            }
        });

        return result;
    }




}

module.exports = MySQL;