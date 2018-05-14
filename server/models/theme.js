const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const themeSchema = new Schema({
  img: String,
  title: String,
  page_url: String,
  level: { type: Number, default: 0 }
})

themeSchema.statics = {
  addTheme (theme) {
    return theme.save();
  },
  removeThemeById (themeId) {
    return this.remove({_id:  themeId}).exec();
  },
  findThemeById (themeId) {
    return this.findById(themeId);
  },
  updateThemeById (themeId, newTheme) {
    return this.findByIdAndUpdate(themeId, newTheme);
  },
  getThemeByLevel (level) {
    return this.find({ level: level }).exec();
  }
}

module.exports = themeSchema;