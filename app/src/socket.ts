import { io } from 'socket.io-client';

export const socket = io(`ws://localhost:3000/chat`, {
    auth: (cb) => {
        cb({
            token: 'Bearer saksit'
        });
    }
});