const express = require('express');
const path = require('path');
const cors = require('cors');
const { RecurrenceRule, scheduleJob } = require('node-schedule');
const axios = require('axios');
const http = require('http');
const socketIo = require('socket.io');

const imagesController = require('./controllers/images.controller');
const climaController = require('./controllers/clima.controller');
const { API } = require('./config');

async function fetchDataAndEmit() {
  const response = await axios.get(`${API}/clima`);
  io.emit('new-data', response.data);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/images', imagesController);
app.use('/clima', climaController);

const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', async socket => {
  console.log('connected', socket);

  const data = await fetchData();
  socket.emit('new-data', data);

  socket.on('disconnect', () => {});
});

setInterval(async () => {
  try {
    fetchDataAndEmit();
  } catch (error) {
    console.error(error);
  }
}, 1000);

const rule = new RecurrenceRule();
rule.tz = 'America/Sao_Paulo';
rule.minute = 0;

scheduleJob(rule, fetchDataAndEmit);

module.exports = app;
