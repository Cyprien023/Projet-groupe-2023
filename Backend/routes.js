const router = require("express").Router();
const multer = require('multer')
const {sayHello,
    getUsers,
    createUser,
    deleteUser,
    getUsersFromEnterprise,



} = require('./component.js')


router.get('/', sayHello);

router.post('/getUsers', getUsers);

router.post('/createUser', multer().array(), createUser);

router.post('/deleteUser', deleteUser);

router.post('/getUsersFromEnterprise', getUsersFromEnterprise);

module.exports = router;