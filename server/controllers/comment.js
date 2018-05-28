const HttpError = require('some-http-error');
const Comment = require('../models').Comment;

const commentController = {};

commentController.addComment = (req, res, next) => {
  const body = Object.assign(new Comment(), req.body);
  Comment.addComment(body).then(comment => {
    return Comment.getCommentsByDynamicsId(comment.dynamics);
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