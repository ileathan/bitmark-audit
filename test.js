var rpcAuth = require('./rpcAuth.js');
var bitcoin = require('./node_modules/bitcoin')

var rpcClient = new bitcoin.Client({
  host: 'localhost',
  port: 9266,
  user: rpcAuth.rpcuser,
  pass: rpcAuth.rpcpassword,
  timeout: 30000
});

var low = require('lowdb');
var db = low('bitmark.json', { storage: require('lowdb/lib/storages/file-async') });
db.defaults({ block: {} })
  .write();

console.log(
  db.get('block')
    .size()
    .value()
  );
