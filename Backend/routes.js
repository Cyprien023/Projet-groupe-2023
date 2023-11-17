const router = require("express").Router();
const {sayHello,
    getUsers,
    createUser,
    deleteUser,
    getUsersFromEnterprise,



} = require('./component.js')


router.get('/', sayHello);

router.post('/getUsers', getUsers);

router.post('/createUser', createUser);

router.post('/deleteUser', deleteUser);

router.post('/getUsersFromEnterprise', getUsersFromEnterprise);

module.exports = router;