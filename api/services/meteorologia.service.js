const axios = require('axios');
const { RecurrenceRule, scheduleJob } = require('node-schedule');
const http = require('http');
const socketIo = require('socket.io');
const app = require('../app');
const { API } = require('../config');

async function fetchData() {
  const response = await axios.get(`${API}/clima`);
  return response.data;
}

function initializeService() {
  const server = http.createServer(app);

  const io = socketIo(server);

  console.log('io', io);

  io.on('connection', async socket => {
    console.log('connected', socket);

    const data = await fetchData();
    socket.emit('new-data', data);

    socket.on('disconnect', () => {});
  });

  setInterval(async () => {
    try {
      const data = await fetchData();
      io.emit('new-data', data);
    } catch (error) {
      console.error(error);
    }
  }, 1000 * 60 * 60); // Once per hour

  // const rule = new RecurrenceRule();
  // rule.tz = 'America/Sao_Paulo';
  // rule.minute = 0;

  // scheduleJob(rule, async () => {
  //   const data = await fetchData();
  //   io.emit('new-data', data);
  // });
}

module.exports = initializeService;
