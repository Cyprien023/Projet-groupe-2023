const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'drawk.hopto.org',
    user: 'project',
    password: '4X48L6yFrvH3uu',
    database: 'project',
    port: 3306,
});

function execute(query, values, callback) {
    connection.connect();

    connection.query(query, values, (err, results, champs) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête.');
            callback(err, null);
        } else {
            console.log(results);
            callback(null, results);
        }
    });

    connection.end();
}


module.exports.getUsers = async (req, res) => {
    let values = []
    try {
        execute('SHOW tables;', values, (err, r) => {
            if (err){
                res.status(503).send('Erreur');
                return;
            }
            res.json(r);
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};


module.exports.sayHello = (req, res) => {
    res.send('Hello Wrld !');
}