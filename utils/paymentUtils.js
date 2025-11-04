exports.validateCryptoPayment = async (txid, expectedAmount) => {
  // شبیه‌سازی بررسی پرداخت رمزارزی
  if (!txid || expectedAmount <= 0) return false;
  return true;
};
