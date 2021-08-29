const router = require('express').Router();
import { body } from 'express-validator';
import { registerUser } from '../controllers/registerController'

router.post('/', registerUser)

module.exports = router;