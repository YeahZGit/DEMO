const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const dynamicsSchema = new Schema({
  type: Number,
  title: String,
  title_img: String,
  content: String,
  author: { type: ObjectId, ref: 'User' },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  comment_count: { type: Number, default: 0 },
  approve_count: { type: Number, default: 0 }
})

dynamicsSchema.statics = {
  addDynamics (dynamics) {
    return dynamics.save();
  },
  removeDynamicsById (dynamicsId) {
    return this.findByIdAndRemove(dynamicsId);
  },
  findDynamicsById (dynamicsId) {
    return this.findById(themeId);
  },
  updateDynamicsById (dynamicsId, newDynamics) {
    return this.findByIdAndUpdate(dynamicsId, newDynamics);
  },
  getSelfDynamicsByUserId (userId) {
    return this.find({ author: userId });
  },
  getOtherDynamicsByUserId (userId) {
    // return 
  }
}

module.exports = dynamicsSchema;