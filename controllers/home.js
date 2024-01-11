const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({"author":"Đào Trung Hiếu","FB":"https://www.facebook.com/Info.TrungTinh2k7"});
};