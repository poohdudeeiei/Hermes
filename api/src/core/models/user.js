const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: String,
    displayname: String,
    passwordHash: String,
    passwordSalt: String,
    avatar: String
})

module.exports = userSchema
