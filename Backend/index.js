const mysql = require('mysql');
const port_mariadb = 3306;
const host = 'localhost';
const user = 'remote';
const password = '.';


const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: 'project',
    port: port_mariadb,
});

function executerRequeteSQL(request) {
    connection.connect();
    connection.query(request, (e) => {
        if (e) throw e;
        connection.end();
    });
}
