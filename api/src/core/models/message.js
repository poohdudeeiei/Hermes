const { ObjectId } = require("bson")
const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    senderID: String,
    content: {},
    sendTime: Date,
    chatID: ObjectId
})

module.exports = messageSchema
