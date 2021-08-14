const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(__dirname + "/public"));

server.listen(3344, () => {
  console.log("Server started on http://localhost:3344");
});
