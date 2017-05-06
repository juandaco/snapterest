const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customize to your Application Needs
const User = new Schema({
  id: Number,
  username: String,
  profilePicture: String,
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
  liked: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
});

module.exports = mongoose.model('User', User);
