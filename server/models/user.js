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
    return this.findById(userId);
  },
  getAuth(username, password) {
    return this.find({ username: username, password: password });
  },
  updateUserById (userId, newUser) {
    return this.findByIdAndUpdate(userId, newUser);
  },
  addFans () {

  },
  removeFans () {

  },
  getAllFans () {

  },
  addFollow () {

  },
  removeFollow () {

  },
  getAllFollows () {

  }
}

module.exports = userSchema;