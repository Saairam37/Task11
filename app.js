const express = require('express');
const logger = require('./utils/logger');
const authRouter = require('./routes/authRouter');
const errorRouter = require('./utils/errorRouter');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1/auth', authRouter);

app.use(errorRouter);

module.exports = app;
