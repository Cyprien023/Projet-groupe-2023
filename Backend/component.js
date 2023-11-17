const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
        execute('SELECT * FROM User', values, (err, r) => {
            if (err) {
                res.status(503).send('Erreur');
                return;
            }
            res.json(r);
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};

module.exports.createUser = async (req, res) => {
    let values = [undefined, undefined, undefined, undefined, undefined];
    values[0] = req.query.lastname;
    values[1] = req.query.firstname;
    values[2] = req.query.email;
    values[3] = bcrypt.hashSync(req.query.password, saltRounds);
    values[4] = parseInt(req.query.id_entreprise);
    try {
        execute('INSERT INTO User (lastname, firstname, email, password, id_entreprise) VALUE (?, ?, ?, ?, ?)', values, (err, r) => {
            if (err) {
                res.status(503).send('Erreur');
                return;
            }
            res.json({confirmation : 1});
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};

module.exports.deleteUser = async (req, res) => {
    let values = [undefined];
    values[0] = req.query.id;
    try {
        execute('DELETE FROM User where id=?;', values, (err, r) => {
            if (err) {
                res.status(503).send('Erreur');
                return;
            }
            res.json({confirmation : 1});
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }

};


module.exports.sayHello = (req, res) => {
    res.send('Hello Wrld !');
}
