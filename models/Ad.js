const mongoose = require('mongoose');
const adSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  contentId: String,
  txid: String,
  amount: Number,
  status: String
});
module.exports = mongoose.model('Ad', adSchema);
