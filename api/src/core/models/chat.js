const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    type: String,
    members: [{
        id: String,
        joinedTime: Date
    }],
    color: String,
    image: String
})

module.exports = chatSchema
