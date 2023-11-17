const bcrypt = require("bcrypt");
const { execute } = require('./func.js')

const saltRounds = 10;


module.exports.getUsers = async (req, res) => {
    let values = []
    try {
        execute('SELECT * FROM User', values, (err, r) => {
            if (err) {
                res.status(503).json({confirmation : 0});
                return;
            }
            res.json(r);
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }
};

module.exports.createUser = async (req, res) => {
    console.log(req.body);
    if (!(req.body.lastname && req.body.firstname && req.body.email && req.body.password && req.body.id_entreprise)){
        res.status(400).json({confirmation : 0, error : 'Missing parameters.'});
        return;
    }

    let values = [undefined, undefined, undefined, undefined, undefined];
    values[0] = req.body.lastname;
    values[1] = req.body.firstname;
    values[2] = req.body.email;
    values[3] = bcrypt.hashSync(req.body.password, saltRounds);
    values[4] = parseInt(req.body.id_entreprise);
    try {
        execute('INSERT INTO User (lastname, firstname, email, password, id_entreprise) VALUE (?, ?, ?, ?, ?)', values, (err, r) => {
            if (err) {
                res.status(503).json({confirmation : 0});
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
    values[0] = req.body.id;
    try {
        execute('DELETE FROM User where id=?;', values, (err, r) => {
            if (err) {
                res.status(503).json({confirmation : 0});
                return;
            }
            res.json({confirmation : 1});
        })
    } catch (error) {
        res.status(500).send('Erreur lors de l\'exécution de la requête SQL');
    }

};

module.exports.getUsersFromEnterprise = async (req, res) => {
    let values = [req.body.id_entreprise]
    try {
        execute('SELECT * FROM User WHERE id_entreprise=?;', values, (err, r) => {
            if (err) {
                res.status(503).json({confirmation : 0});
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
