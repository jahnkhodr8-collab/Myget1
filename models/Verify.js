const mongoose = require('mongoose');
const verifySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: String,
  txid: String,
  amount: Number,
  expiresAt: Date
});
module.exports = mongoose.model('Verify', verifySchema);
