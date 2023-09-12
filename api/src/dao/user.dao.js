const mongoose = require('mongoose');
const userSchema = require('../core/models/user');

const UserDao = mongoose.model('user', userSchema);

module.exports = UserDao;
