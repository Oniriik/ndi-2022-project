import { socket } from './config';

export const sendMessage = (message) => {
    socket.emit('sendMessage',message);
};