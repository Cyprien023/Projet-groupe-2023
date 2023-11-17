const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'drawk.hopto.org',
    user: 'project',
    password: '4X48L6yFrvH3uu',
    database: 'project',
    port: 3306,
});

connection.connect();

function execute(query, values, callback) {

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


module.exports.getUsers = async (req, res) => {
    let values = []
    try {
        execute('SHOW tables;', values, (err, r) => {
            if (err) {
                res.status(503).send('Erreur');
                connection.end();
                return;
            }
            res.json(r);
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};


module.exports.sayHello = (req, res) => {
    res.send('Hello Wrld !');
}
