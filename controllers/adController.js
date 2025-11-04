const Ad = require('../models/Ad');
const { validateCryptoPayment } = require('../utils/paymentUtils');

exports.createAd = async (req, res) => {
  const { userId, contentId, txid, amount } = req.body;
  const isPaid = await validateCryptoPayment(txid, amount);
  if (!isPaid) return res.status(400).json({ error: "پرداخت تأیید نشد" });
  const ad = new Ad({ userId, contentId, txid, amount, status: "active" });
  await ad.save();
  res.status(201).json({ message: "آگهی فعال شد", ad });
};
