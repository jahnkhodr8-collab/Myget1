const User = require('../models/User');
exports.registerUser = async (req, res) => {
  const { email, deviceId } = req.body;
  const count = await User.countDocuments({ deviceId });
  if (count >= 30) return res.status(403).json({ error: "حداکثر تعداد اکانت در این دستگاه ثبت شده است." });
  const user = new User({ email, deviceId });
  await user.save();
  res.status(201).json({ message: "ثبت‌نام موفق بود", user });
};
