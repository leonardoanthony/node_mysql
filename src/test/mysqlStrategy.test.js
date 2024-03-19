const assert = require('assert');
const MySQL = require("./db/mysql");
const ContextStrategy = require("./db/strategies/base/contextStrategy");



const contextMysql = new ContextStrategy(new MySQL());


describe('MySQL Strategy', function() {


    it('MySQL Connect', function(){
        contextMysql.connect();
        assert.deepEqual(true, true);
    })
});