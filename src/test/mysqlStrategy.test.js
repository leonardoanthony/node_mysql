const assert = require('assert');
const MySQL = require('../db/mysql');
const ContextStrategy = require('../db/strategies/base/contextStrategy');



const context = new ContextStrategy(new MySQL());

const MOCK_TAREFA_CADASTRAR = {
    descricao: 'Realizar teste de software',
}


describe('MySQL Strategy', function() {

    this.beforeAll(async function(){
        context.connect();
    })

    it('MySQL Connect', async function(){
        const result = await context.isConnected();
        assert.deepEqual(result, true);
    });

    it('Create task', async function(){
        const result = await context.add(MOCK_TAREFA_CADASTRAR);
        assert.deepEqual(result, MOCK_TAREFA_CADASTRAR);
    })
});