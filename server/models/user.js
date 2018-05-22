const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: { type: String, select: false },
  picture_url: String,
  phone_number: String,
  introduction: String,
  fans: [{ type: ObjectId, ref: 'User' }],
  follow: [{ type: ObjectId, ref: 'User' }]
})

userSchema.statics = {
  addUser (user) {
    return user.save();
  },
  removeUserById (userId) {
    return this.findByIdAndRemove(userId);
  },
  findUserById (userId) {
    return this.findById(userId).populate('fans').populate('follow');
  },
  findUserFollow (userId) {
    return this.findOne({ _id: userId });
  },
  getAuth(username, password) {
    return this.findOne({ username: username, password: password });
  },
  updateUserById (userId, newUser) {
    return this.findByIdAndUpdate(userId, newUser);
  },
  // addFans (userId, followId) {

  // },
  removeFans (userId, fansId) {
    return this.findByIdAndUpdate(userId, {$pull: { fans: fansId }});
  },
  getAllFansByUserId (userId) {
    return this.findById(userId).populate('fans').exec();
  },
  addFollow (userId, followId) {
    return this.findByIdAndUpdate(userId, {$push: { follow: followId }});
  },
  removeFollow (userId, followId) {
    return this.findByIdAndUpdate(userId, {$pull: { follow: followId }});
  },
  getAllFollowsByUserId (userId) {
    return this.findById(userId).populate('follow').exec();
  },
  fuzzyQueryByUserName (query) {
    let reg = new RegExp(query, 'i');
    return this.find({ username: reg });
  }
}

module.exports = userSchema;