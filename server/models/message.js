const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const messageSchema = new Schema({
  dyanmics: { type: ObjectId, ref: 'Dynamics' },
  user: { type: ObjectId, ref: 'User' },
  create_at: { type: Date, default: Date.now },
  message_type: { type: Number, default: 1 }
})

messageSchema.statics = {
  addMessage (message) {
    return approve.save();
  },
  getMessagesByUserId (userId) {
    return this.find({ user: userId }).populate('dynamics').populate('user');
  }
}

module.exports = messageSchema;