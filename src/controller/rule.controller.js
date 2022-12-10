const ruleModel = require("../model/learn.model");
const { status_Code } = require("../middleware/statusCode");
exports.post_rule = async (req, res) => {
  try {
    if (!req.body.video && !req.body.title) {
      return res
        .status(status_Code.bad_request)
        .json({ message: "The body is not emty" });
    }
    const newData = {
      ...req.body,
    };
    const video = await ruleModel.create(newData);
    return res.status(status_Code.success).json(video);
  } catch (error) {
    return res
      .status(status_Code.Server_error)
      .json({ message: "Server Error" });
  }
};
exports.get_rule = async (req, res) => {
  try {
    const video = await ruleModel.find({}).select('-__v')
    return res.status(status_Code.success).json(video)
  } catch (error) {
    return res.status(status_Code.Server_error);
  }
};
