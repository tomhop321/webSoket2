

const WebSocket = require("ws");
const wss = new WebSocket.Server({ 'https://websoket2.onrender.com' });
wss.on("connection", ws => {
console.log("New client connected!");
ws.on("close", () => {
});
console.log("Client has disconnected!");
});
