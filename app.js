const http = require('http');
const websocket = require('ws');
let g = 0;

const server = http.createServer((req, res) => {
    res.end("I am connected");
g = 1;
    
});
const wss = new websocket.Server({ server });

wss.on('headers', (headers, req) => {
    //console.log(headers); Not logging the header anymore
});

//Event: 'connection'
wss.on('connection', (ws, req) => {
    ws.send('This is a message from server, connection is established');
    //receive the message from client on Event: 'message'
    ws.on('message', (msg) => {
if(g == 1){ws.send("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
          g =0;
          }
        
      if(msg.toString('ascii') == 2){ws.send("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")}
        console.log(msg.toString('ascii'));
    });
});

server.listen(3000);
