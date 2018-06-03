const HttpError = require('some-http-error');
const Comment = require('../models').Comment;
const Dynamics = require('../models').Dynamics;

const commentController = {};

commentController.addComment = (req, res, next) => {
  const body = Object.assign(new Comment(), req.body);
  const dynamicsId = req.body.dynamics;
  Comment.addComment(body).then(comment => {
    return Dynamics.addApproveCommentCount(1, dynamicsId);
  }).then(() => {
    return Comment.getCommentsByDynamicsId(dynamicsId);
  }).then(comments => {
    res.success(comments);
  }).catch(next);
}

commentController.getCommentsByDynamicsId = (req, res, next) => {
  const dynamicsId = req.params.dynamicsId;
  Comment.getCommentsByDynamicsId(dynamicsId).then(comments => {
    res.success(comments);
  }).catch(next);
}

module.exports = commentController;