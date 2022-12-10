const learnModel = require("../model/learn.model");
const { status_Code } = require("../middleware/statusCode");
exports.post_video = async (req, res) => {
  try { 
    const video = await learnModel.create(req.body);
    return res.status(status_Code.success).json(video);
  } catch (error) {
    return res
      .status(status_Code.Server_error)
      .json({ message: "Server Error" });
  }
};
exports.get_video = async (req, res) => {
  try {
    const video = await learnModel.find({}).select("-__v");
    return res.status(status_Code.success).json(video);
  } catch (error) {
    return res.status(status_Code.Server_error);
  }
};
