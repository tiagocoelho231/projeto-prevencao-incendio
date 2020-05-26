const express = require('express');
const path = require('path');
const cors = require('cors');

const imageController = require('./controllers/image.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', imageController);

module.exports = app;
