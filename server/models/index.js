const mongoose = require('mongoose');
const configs = require('../configs');

mongoose.connect(configs.mongodb);

exports.Dynamics = mongoose.model('Dynamics', require('./dynamics'));
exports.Theme = mongoose.model('Theme', require('./theme'));
exports.User = mongoose.model('User', require('./user'));
exports.Comment = mongoose.model('Comment', require('./comment'));
exports.Approve = mongoose.model('Approve', require('./approve'));
exports.Message = mongoose.model('Message', require('./message'));