const HttpError = require('some-http-error');
const Message = require('./models').Message;

const messageController = {};

messageController.getMessageByUserId = (req, res, next) => {
  const userId = req.params.userId;
  Message.getMessageByUserId(userId).then(messages => {
    res.success(messages);
  }).catch(next);
}

module.exports = messageController;