require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log(socket);
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

server.listen(port, () => console.log(`running at http://localhost:${port}`));
