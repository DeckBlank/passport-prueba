const express = require('express');
const passport = require('passport');

require('../middleware/auth');

const routes = require('../routes/routes');
const secureRoute = require('../routes/secure-routes');

const app = express();

app.use(express.json());
app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;