const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); //the adress of react app that we let in...
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io.on('connection', (socket) => {
  socket.on('spychat', (message) => {
    io.sockets.emit('spychat', message);
  });
});

http.listen(3002, () => {
  console.log('App listening on port 3002');
});
