const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { validateUserRegistration, handleValidationErrors } = require('../utils/validation');

const router = express.Router();

router.post('/register', validateUserRegistration, handleValidationErrors, registerUser);
router.post('/login', loginUser);

module.exports = router;