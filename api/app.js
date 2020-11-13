const express = require('express');
const path = require('path');
const cors = require('cors');

const imagesController = require('./controllers/images.controller');
const climaController = require('./controllers/clima.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', (req, res) => res.json(`There's nothing to see here...`));
app.use('/images', imagesController);
app.use('/clima', climaController);

module.exports = app;
