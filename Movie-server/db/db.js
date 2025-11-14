const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D2_92760_Amisha',
    password: 'manager',
    database: 'movies'
})

module.exports = pool