const mysql = require("mysql");
const util = require('util');

const connection = mysql.createConnection({
    host: 'drawk.hopto.org',
    user: 'project',
    password: '4X48L6yFrvH3uu',
    database: 'project',
    port: 3306,
});

function execute(query, callback) {
    connection.connect();

    connection.query(query, (erreur, resultats, champs) => {
        if (erreur) {
            console.error('Erreur lors de l\'exécution de la requête : ', erreur);
            callback(erreur, null);
        } else {
            console.log('Résultats de la requête : ', resultats);
            callback(null, resultats);
        }
    });

    connection.end();
}


module.exports.getUsers = async (req, res) => {
    try {
        execute('SHOW TABLES;', (err, r) => {
            res.send(r[0]);
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};


module.exports.sayHello = (req, res) => {

}