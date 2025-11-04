const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  deviceId: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);
