const express = require('express');
require('../middleware/auth');

const mainRouter = require('../routes/index');
const app = express();

app.use(express.json());
app.use('/api', mainRouter);

module.exports = app;