const ruleModel = require("../model/rule.model");
const { status_Code } = require("../middleware/statusCode");
exports.post_rule = async (req, res) => {
  try {
    if (!req.body.title && !req.body.title) {
      return res
        .status(status_Code.bad_request)
        .json({ message: "The body is not emty" });
    }
    const newData = {
      ...req.body,
    };
    const rule = await ruleModel.create(newData);
    return res.status(status_Code.success).json(rule);
  } catch (error) {
    return res
      .status(status_Code.Server_error)
      .json({ message: "Server Error" });
  }
};
exports.get_rule = async (req, res) => {
  try {
    const rule = await ruleModel.find({}).select('-__v')
    return res.status(status_Code.success).json(rule)
  } catch (error) {
    return res.status(status_Code.Server_error);
  }
};

