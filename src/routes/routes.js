const express = require('express');
const passport = require('passport');
const router = express.Router();
const { login, signup } = require('../controllers/login');

/**
 * @openapi
 * /signup:
 *   post:
 *     summary: Permite a los usuarios registrarse en la app
 *     description: se ingresa mail y contraseña
*/
router.post('/signup', passport.authenticate('signup', { session: false }), signup);

/**
 * @openapi
 * /login:
 *   get:
 *     summary: Permite a los usuarios loguearse a la aplicacion
 *     description: Se envia email y contraseña y se devuelve un token para acceder a las rutas segurizadas
*/
router.post('/login', login);

module.exports = router;