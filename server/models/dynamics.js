const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const dynamicsSchema = new Schema({
  type: Number,
  title: String,
  title_img: String,
  imgs: Array,
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
    return this.findById(dynamicsId);
  },
  updateDynamicsById (dynamicsId, newDynamics) {
    return this.findByIdAndUpdate(dynamicsId, newDynamics);
  },
  getSelfDynamicsByUserId (userId) {
    return this.find({ author: userId }).sort({ create_at: -1 }).populate('author');
  },
  getDynamicsByFollowId (followIds) {
    return this.find({ author: {$in: followIds} }).sort({ create_at: -1 }).populate('author');
  },
  getRecommendDynamics () {
    return this.find({ type: 2 }).sort({ approve_count: -1 }).populate('author');
  },
  fuzzyQuerByTitleAndContent (query) {
    let reg = new RegExp(query, 'i');
    return this.find({ $or: [{ title: reg }, { content: reg }]}).populate('author');
  }
}

module.exports = dynamicsSchema;