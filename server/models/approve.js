const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const approveSchema = new Schema({
  dyanmics: { type: ObjectId, ref: 'Dynamics' },
  user: { type: ObjectId, ref: 'User' }
})

commentSchema.statics = {
 addApprove (approve) {
  return approve.save();
 }
}

module.exports = approveSchema;