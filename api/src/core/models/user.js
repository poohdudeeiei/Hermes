const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: Number,
    displayname: String,
    passwordHash: String,
    passwordSalt: String,
    avatar: String
})

module.exports = userSchema