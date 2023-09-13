const { Server } = require("socket.io");
const addOnMessage = require("./hubs/message.tunnel");

const corsConfig = { cors: { origin: "*", methods: ["GET", "POST"] } };

var io;

function addFeature(io){
    addOnMessage(io);
}


function createSocketServer(server) {
    io = new Server(server, corsConfig);
    addFeature(io);
}

module.exports = createSocketServer;
