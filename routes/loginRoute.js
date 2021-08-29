var router = require('express').Router();
var loginUser = require('../controllers/loginController').loginUser;
router.post('/', loginUser);
module.exports = router;
