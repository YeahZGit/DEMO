const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema({
  commentator: { type: ObjectId, ref: 'User' },
  dynamics: ObjectId,
  content: String
})

commentSchema.statics = {
  addComment (comment) {
    return comment.save();
  },
  getCommentsByDynamicsId (dynamicsId) {
    return this.find({ dynamics: dynamicsId }).populate('commentator');
  }
}

module.exports = commentSchema;