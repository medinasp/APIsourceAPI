const sequelize = require('sequelize');
const database = new  sequelize('BaseNodeAula','sa','J@zzC@f3',
{
    dialect:'mssql', host:'localhost', port:1433
});

database.sync();

module.exports = database;