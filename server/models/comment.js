const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
})

commentSchema.statics = {
  addComment () {
    return this.save()
  }
}

module.exports = commentSchema;