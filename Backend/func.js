const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'drawk.hopto.org',
    user: 'project',
    password: '4X48L6yFrvH3uu',
    database: 'project',
    port: 3306,
});

connection.connect();

module.exports.execute = (query, values, callback) => {

    connection.query(query, values, (err, results, champs) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête.');
            callback(err, null);
        } else {
            console.log(results);
            callback(null, results);
        }
    });
}

