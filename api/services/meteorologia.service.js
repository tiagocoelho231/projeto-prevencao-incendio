const axios = require('axios');
const { RecurrenceRule, scheduleJob } = require('node-schedule');
const http = require('http');
const socketIo = require('socket.io');
const app = require('../app');
const { API } = require('../config');

function initializeService() {
  const server = http.createServer(app);

  const io = socketIo(server);

  io.on('connection', socket => {
    socket.emit('new-data', data);

    socket.on('disconnect', () => {});
  });

  const rule = new RecurrenceRule();
  rule.tz = 'America/Sao_Paulo';
  rule.hour = 3;
  rule.minute = 0;

  scheduleJob(rule, async () => {
    const { data } = await axios.get(`${API}/clima`);
    io.emit('new-data', data);
  });
}

module.exports = initializeService;
