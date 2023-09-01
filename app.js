

const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 3000});
wss.on("connection", ws => {
console.log("New client connected!");
ws.on("close", () => {

console.log("Client has disconnected!");
      ws.send('This is a message from server, connection is established');
    //receive the message from client on Event: 'message'
    ws.on('message', (msg) => {
      if(msg.toString('ascii') == 2){ws.send("eeeeeeeeee")}
       // console.log(msg.toString('ascii'));
});
});
