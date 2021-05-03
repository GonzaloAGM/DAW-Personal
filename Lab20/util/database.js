//Este archivo normalmente se pone en el .gitignore

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',//aqui se pondría la dirección ip
    user: 'root',
    database: 'labs_daw_bd_gon',
    password: '',
    port: 3306
});

module.exports = pool.promise();