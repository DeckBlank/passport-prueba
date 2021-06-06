const express = require('express');
const passport = require('passport');
const router = express.Router();
const { login, signup } = require('../controllers/login');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserData:
 *       type: object
 *       properties:
 *         email:
 *           type: String
 *           description: mail del usuario
 *           example: pepe@gmail.com
 *         password:
 *           type: string
 *           description: contraseña del usuario.
 *           example: Bokita123
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Permite a los usuarios registrarse en la app
 *     description: se ingresa mail y contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserData'
 *     responses:
 *       200:
 *         description: New User Data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                    type: string
 *                    example: Signup successful
 *                 user:
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
 *                        example: 60bd5be8de7e1a1ed7f7bd6a
 *                      email:
 *                        type: string
 *                        example: pepe@gmail.com
 */

router.post('/signup', passport.authenticate('signup', { session: false }), signup);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Permite a los usuarios loguearse a la aplicacion
 *     description: Se envia email y contraseña y se devuelve un token para acceder a las rutas segurizadas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserData'
 *     responses:
 *       200:
 *         description: Token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYmNmMTE4
*/
router.post('/login', login);

module.exports = router;