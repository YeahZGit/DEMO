const HttpError = require('some-http-error');
const Message = require('../models').Message;

const messageController = {};

messageController.getMessagesByUserId = (req, res, next) => {
  const userId = req.params.userId;
  Message.getMessagesByUserId(userId).then(messages => {
    res.success(messages);
  }).catch(next);
}

module.exports = messageController;