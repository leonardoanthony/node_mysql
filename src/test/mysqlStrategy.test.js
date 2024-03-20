const assert = require('assert');
const MySQL = require('../db/mysql');
const ContextStrategy = require('../db/strategies/base/contextStrategy');



const context = new ContextStrategy(new MySQL());

const MOCK_TAREFA_CADASTRAR = {
    descricao: 'Realizar teste de software',
}

const MOCK_TAREFA_ATUALIZAR = {
    descricao: 'Atualizar tarefa',
}
const MOCK_TAREFA_COMPLETAR = {
    descricao: 'Tarefa comcluída',
}


describe('MySQL Strategy', function() {

    this.beforeAll(async function(){
        context.connect();
        context.truncate();
        context.add(MOCK_TAREFA_ATUALIZAR);
        context.add(MOCK_TAREFA_COMPLETAR);
    })

    it('MySQL Connect', async function(){
        const result = await context.isConnected();
        assert.deepEqual(result, true);
    });

    it('Create task', async function(){
        const result = await context.add(MOCK_TAREFA_CADASTRAR);
        assert.deepEqual(result, MOCK_TAREFA_CADASTRAR);
    });

    it('List tasks', async function(){
        const result = await context.list({descricao: MOCK_TAREFA_CADASTRAR.descricao});
        delete result.id;
        delete result.concluida;
        assert.deepEqual(result, MOCK_TAREFA_CADASTRAR);
    });
    
    it('Update Task', async function() {
        const item = await context.list({descricao: MOCK_TAREFA_ATUALIZAR.descricao});
        
        const novoItem = {
            ...item,
            descricao: 'Item Atualizado',
        }
        
        await context.edit(item.id, novoItem);
        const itemUpdated = await context.list({descricao: novoItem.descricao});
        assert.deepEqual(itemUpdated, novoItem);
    });

    it('Delete Task', async function(){
        const item = await context.list({descricao: MOCK_TAREFA_CADASTRAR.descricao});

        const result = await context.delete(item.id);

        assert.deepEqual(result, 1);
    });

    it('Complete Task', async function() {
        const item = await context.list({descricao: MOCK_TAREFA_COMPLETAR.descricao})
        
        await context.completeTask(item.id);
        
        const itemCompleted = await context.list({id: item.id});

        const expected = {
            ...item,
            concluida: 1
        }

        assert.deepEqual(itemCompleted, expected);
    });
});