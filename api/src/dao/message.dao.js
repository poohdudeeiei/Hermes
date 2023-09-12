const mongoose = require('mongoose');
const messageSchema = require('../core/models/message');

const MessageDao = mongoose.model('message', messageSchema);

module.exports = MessageDao;
