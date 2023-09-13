const { Server } = require("socket.io");
const ChatDao = require("./dao/chat.dao");
const MessageDao = require("./dao/message.dao");

const authGuard = async (socket, next) => {
    const info = await virifyToken(socket.handshake.auth.token);
    console.debug("token info received: ", info);
    if (!!info.id) {
        socket.sub = info.id
        next();
    } else {
        next(new Error("Unauthorized"));
    }
}

const onConnect = socket => {
    console.log("socket connected...");
    var auth = socket.sub;
    console.log(`${socket.id} connected to with ${auth}`);
    socket.join(auth);
    console.log("room connected: ", auth, socket.rooms);

    socket.on("message:send", async context => {
        const members = await saveMessageToDb(auth, context).catch(e => {
            // TODO: handle error Save to database failure
            socket.emit("message", `Error : ${e.message}`);
        });
    });
}

/**
* @typedef {Object} MessageSenderObject
* @property {string} chatId
* @property {Object} chatContent
*/
/**
* @typedef {Object} MessageBoadcastObject
* @property {string} chatId
* @property {string} sender
* @property {Date} timestamp
* @property {Object} chatContent
*/

/**
 * @param {string} sub
 * @param {MessageSenderObject} context
 * @returns {Promise}
 */
function saveMessageToDb(sub, context) {
    return new Promise(async (resolve, reject) => {
        /** @type {MessageBoadcastObject} */
        let msgRes = { ...context }
        msgRes.sender = sub;
        msgRes.timestamp = Date.now();

        const chatmembers = (await ChatDao.findOne({ _id: context.chatId }, { "members.id": 1, "_id": 0 })).members.map(m => m.id);
        if (chatmembers.indexOf(sub) < 0)
            reject(new Error("Permission denied"));
        else {
            const msg = new MessageDao({
                senderID: sub,
                content: context.chatContent,
                chatID: context.chatId,
                sendTime: msgRes.timestamp
            });
            await msg.save().then(()=>{
                sendMessageTo(chatmembers, msgRes)
                return resolve();
            }).catch(e=>reject(e));
        };
    });
}


/**
* @typedef {Object} TokenContent
* @property {string} id
*/

function parseToken(token) {
    console.debug("parse : ", token);
    const x = token.split(' ');
    return { type: x[0], token: x[1] }
}

/**
* @param {string} token
* @returns {Promise<TokenContent>}
*/
function virifyToken(token) {
    // TODO: virify token and get content in token
    console.debug("viriry : ", token);
    const t = parseToken(token);
    return new Promise(resove => {
        resove({ id: t.token });
    });
}

var io;
var chatSpace;
/** @type {boolean} */
var isInitalized = false;

function createSocketServer(server) {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    chatSpace = io.of("/chat");
    chatSpace.use(authGuard);
    chatSpace.on('connection', onConnect);
    isInitalized = true;
}

function sendMessageTo(dests, message) {
    if (!isInitalized)
        throw new Error("socket server is not initialized");

    if (!Array.isArray(dests))
        dests = [dests];

    dests.forEach(dest => {
        chatSpace.to(dest).emit("message", message);
    });
}

module.exports = createSocketServer;
module.exports.sendMessageTo = sendMessageTo;
