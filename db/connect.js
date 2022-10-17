const mySql= require('mysql2');
const mysqlConnect= mySql.makeConnect({
    host: 'localhost',
    port: 8080,
    user: 'root',
    database: 'Human_Resource',
});

module.exports = mysqlConnect;