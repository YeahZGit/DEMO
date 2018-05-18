const mongoose = require('mongoose');
const configs = require('../configs');

mongoose.connect(configs.mongodb);

exports.Dynamics = mongoose.model('Dynamics', require('./dynamics'));
exports.Theme = mongoose.model('Theme', require('./theme'));
exports.User = mongoose.model('User', require('./user'));