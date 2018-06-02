const HttpError = require('some-http-error');
const Approve = require('../models').Approve;

const approveController = {};

approveController.addApprove = (req, res, next) => {
  const body = Object.assign(new Approve(), req, body);
  AbortController.addApprove(body).then(approve => {
    res.success(approve);
  }).catch(next)
}

module.exports = approveController;