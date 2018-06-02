const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const messageSchema = new Schema({
  dyanmics: { type: ObjectId, ref: 'Dynamics' },
  user: { type: ObjectId, ref: 'User' },
  message_type: { type: Number, default: 1 }
})

commentSchema.statics = {
  addMessage (message) {
    return approve.save();
  },
  getMessageByUserId (userId) {
    return this.find({ user: userId }).populate('dynamics').populate('user');
  }
}

module.exports = approveSchema;