const app = require('./app');
const { RecurrenceRule, scheduleJob } = require('node-schedule');
const axios = require('axios');
const socketIo = require('socket.io');
const { API } = require('./config');
const port = process.env.PORT || 3030;
const http = require('http');

let cachedResult = null;

const server = http.createServer(app);

const io = socketIo(server, { transports: ['websocket'] });

async function fetchDataAndEmit(socket) {
  const { data } = await axios.get(`${API}/clima`);
  cachedResult = data;
  if (socket) {
    socket.emit('new-data', data);
  } else {
    io.emit('new-data', data);
  }
}

io.on('connection', async socket => {
  console.log('connected', socket.id);
  if (!cachedResult) {
    fetchDataAndEmit(socket);
  } else {
    socket.emit('new-data', cachedResult);
  }

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
  });
});

setInterval(async () => {
  try {
    fetchDataAndEmit();
  } catch (error) {
    console.error(error);
  }
}, 30000);

const rule = new RecurrenceRule();
rule.tz = 'America/Sao_Paulo';
rule.minute = 0;

scheduleJob(rule, fetchDataAndEmit);

server.listen(port, () => {
  console.log(`Application running on port ${port}`);
});

fetchDataAndEmit();
