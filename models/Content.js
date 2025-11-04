const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  isVerified: Boolean,
  status: String,
  engagementScore: Number
});
module.exports = mongoose.model('Content', contentSchema);
