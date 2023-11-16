const router = require("express").Router();
const {sayHello, getUsers } = require('./component.js')

router.get('/', sayHello);

router.get('/getUsers', getUsers);

module.exports = router;