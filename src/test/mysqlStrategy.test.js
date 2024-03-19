const assert = require('assert');
const MySQL = require('../db/mysql');
const ContextStrategy = require('../db/strategies/base/contextStrategy');



const context = new ContextStrategy(new MySQL());


describe('MySQL Strategy', function() {

    this.beforeAll(async function(){
        context.connect();
    })


    it('MySQL Connect', async function(){
        const result = await context.isConnected();
        assert.deepEqual(result, true);
    })
});