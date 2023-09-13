const {virifyToken} = require('../services/token.service');

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

module.exports = authGuard;
