const mySql= require('mysql2');


 const mysqlConnect=  mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root1234',
    database: 'Human_Resource',
});


module.exports = mysqlConnect;