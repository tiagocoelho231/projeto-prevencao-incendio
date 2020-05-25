const express = require('express');
const cors = require('cors');

const imageController = require('./controllers/image.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/', imageController);

module.exports = app;
