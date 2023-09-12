const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    type: String,
    members: [String],
    color: String,
    image: String
})

module.exports = chatSchema
