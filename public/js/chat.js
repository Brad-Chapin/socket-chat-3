$(function () {
  let socket = io();

  socket.on("new message", function (message){
    let $li = $("<li>").text(message);
    $("#messages").append($li);
  });
  $("#sendMessage").click(function (e){
    e.preventDefault();
    socket.emit("new message", $("#m").val());
    $("#m").val("");
  });
});
