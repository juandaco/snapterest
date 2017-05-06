const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customize to your Application Needs
const User = new Schema({
  username: String,
  id: Number,
  name: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', User);
