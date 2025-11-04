const Verify = require('../models/Verify');
const { validateCryptoPayment } = require('../utils/paymentUtils');

exports.purchaseVerify = async (req, res) => {
  const { userId, txid, amount, type } = req.body;
  const isValid = await validateCryptoPayment(txid, amount);
  if (!isValid) return res.status(400).json({ error: "پرداخت نامعتبر یا ناقص" });
  const verify = new Verify({ userId, type, txid, amount, expiresAt: Date.now() + 30 * 86400000 });
  await verify.save();
  res.status(200).json({ message: "تیک وریفای فعال شد", verify });
};
