const Content = require('../models/Content');

exports.getExploreFeed = async (req, res) => {
  const interests = req.body.interests || [];
  const feed = await Content.find({
    tags: { $in: interests },
    isVerified: true,
    status: "public"
  }).sort({ engagementScore: -1 }).limit(50);
  res.status(200).json(feed);
};
