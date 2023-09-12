const mongoose = require('mongoose');
const chatSchema = require('../core/models/chat');

const ChatDao = mongoose.model('chat', chatSchema);

module.exports = ChatDao;
