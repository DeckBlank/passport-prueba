const express = require('express');
const passport = require('passport');
const router = express.Router();
const { login, signup } = require('../controllers/login');

router.post('/signup', passport.authenticate('signup', { session: false }), login);

router.post('/login', signup);

module.exports = router;