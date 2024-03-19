const MySQL = require("./db/mysql");
const ContextStrategy = require("./db/strategies/base/contextStrategy");


const contextMySQL = new ContextStrategy(new MySQL());

contextMySQL.add();