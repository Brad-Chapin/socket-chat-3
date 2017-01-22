const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", function (socket){
  socket.on("new message", function (message){
    io.emit("new message", message);
  });
  console.log("A new user has entered the chat.");
});

app.use("/jquery", express.static("node_modules/jquery/dist/"));
app.use("/socket", express.static("node_modules/socket.io-client/dist/"));

app.use(express.static("public"));

server.listen("3000", function (){
  console.log("Listening on port 3000.");
});
