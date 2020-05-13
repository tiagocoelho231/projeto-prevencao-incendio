const express = require('express');

const imageController = require('./controllers/image.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', imageController);

module.exports = app;
