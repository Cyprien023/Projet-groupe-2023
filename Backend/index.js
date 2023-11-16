const mysql = require('mysql');

const port_mariadb = 3306;
const host = 'drawk.hopto.org';
const user = 'project';
const password = '4X48L6yFrvH3uu';


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

connection.connect()
connection.query('show tables;', (error,results) => {
    console.log(results)
    connection.end()
})

//executerRequeteSQL('create table a (id int);')
