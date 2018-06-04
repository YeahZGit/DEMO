const HttpError = require('some-http-error');
const Approve = require('../models').Approve;
const Dynamics = require('../models').Dynamics;
const Message = require('../models').Message;

const approveController = {};

approveController.addApprove = (req, res, next) => {
  const body = Object.assign(new Approve(), req.body);
  const dynamicsId = req.body.dynamics;
  let approve = {};
  Approve.addApprove(body).then(res => {
    approve = res;
    return Dynamics.addApproveCommentCount(2, dynamicsId);
  }).then(() => {
    res.success(approve);
  }).catch(next)
}

module.exports = approveController;