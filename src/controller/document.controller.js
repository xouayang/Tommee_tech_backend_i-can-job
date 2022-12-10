const documentModel = require('../model/document.model')
const { status_Code } = require("../middleware/statusCode");
exports.post_document = async (req, res) => {
  try {
    if (!req.body.file && !req.body.title && !req.body.description) {
      return res
        .status(status_Code.bad_request)
        .json({ message: "The body is not emty" });
    }
    const newData = {
      ...req.body,
    };
    const document = await documentModel.create(newData);
    return res.status(status_Code.success).json(document);
  } catch (error) {
    return res
      .status(status_Code.Server_error)
      .json({ message: "Server Error" });
  }
};
exports.get_document = async (req, res) => {
  try {
    const document = await documentModel.find({}).select('-__v')
    return res.status(status_Code.success).json(document)
  } catch (error) {
    return res.status(status_Code.Server_error);
  }
};

