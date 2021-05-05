//Este archivo normalmente se pone en el .gitignore

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',//aqui se pondría la dirección ip
    user: 'root',
    database: 'Ex2_DAW-BD_Gonzalo',
    password: '',
    port: 3306
});

module.exports = pool.promise();