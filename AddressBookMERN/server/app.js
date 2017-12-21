const express = require('express');
const path = require('path');

const contactRouter = require('./routes/contact');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use('/api/contacts', contactRouter);

app.use('/api', notFound);
app.use('/api', errorHandler);

module.exports = app;
