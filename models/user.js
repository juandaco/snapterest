const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  twitterID: String,
  username: String,
  profilePicture: String,
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
  liked: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
});

module.exports = mongoose.model('User', User);
