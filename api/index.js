const app = require('./app');
const { RecurrenceRule, scheduleJob } = require('node-schedule');
const axios = require('axios');
const socketIo = require('socket.io');
const { API } = require('./config');
const port = process.env.PORT || 3030;
const http = require('http');

const server = http.createServer(app);

const io = socketIo(server, { transports: ['websocket'] });

async function fetchDataAndEmit(socket) {
  const response = await axios.get(`${API}/clima`);
  if (socket) {
    socket.emit('new-data', response.data);
  } else {
    io.emit('new-data', response.data);
  }
}

io.on('connection', async socket => {
  console.log('connected', socket.id);
  fetchDataAndEmit(socket);

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
