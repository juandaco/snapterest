const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Picture = new Schema({
  url: String,
  description: String,
  likes: Number,
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Picture', Picture);
