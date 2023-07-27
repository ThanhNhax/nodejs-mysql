
const mysql = require('mysql2/promise')
const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'employee_db'
})
mysqlPool.query('SELECT 1')
.then(data=>console.log(data))
.catch(e=>console.log(e))


module.exports = mysqlPool