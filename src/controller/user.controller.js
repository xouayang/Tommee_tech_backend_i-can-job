const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {status_Code} = require('../middleware/statusCode')
exports.signUp = async (req, res) => {
  try {
    if (
      !req.body.username &&
      !req.body.password &&
      !req.body.position &&
      !req.body.phone 
    ) {
      return res.status(status_Code.bad_request).json({ message: "The body is not emty" });
    } else {
      const checkPhone = await userModel.findOne({ phone: req.body.phone });
      if (checkPhone) {
        return res
          .status(status_Code.success)
          .json({ message: "Phone number is already exist" });
      }
      let hash = await bcrypt.hash(req.body.password, 10);
      let newData = {
        ...req.body,
        password: hash,
      };
      const user = await userModel.create(newData);
      const asignToken = await jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        "SECRET"
      );
      const returnUser = {
        username: user.username,
        password: user.password,
        position: user.position,
        phone: user.phone,
        role: user.role,
        token: asignToken,
      };
      return res.status(status_Code.created).json(returnUser);
    }
  } catch (error) {
    return res.status(status_Code.Server_error).json({ message: "Server error" });
  }
};
exports.signIn = async (req, res) => {
  try {
    if (!req.body.username && !req.body.password) {
      return res.status(status_Code.bad_request).json({ message: "The body is not emty" });
    } else {
      const user = await userModel.findOne({ username: req.body.username });
      if (!user) {
        return res.status(status_Code.NotFound).json({ message: "Not found user" });
      }
      const validationPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validationPassword) {
        return res.status(status_Code.bad_request).json({ message: "Password incorrect" });
      }
      const asignToken = await jwt.sign(
        { id: user._id, role: user.role },
        "SECRET",
        { expiresIn: 30 * 60 }
      );
      const return_SignIn = {
        username: user.username,
        password: user.password,
        role: user.role,
        token: asignToken,
      };
      return res.status(status_Code.success).json(return_SignIn);
    }
  } catch (error) {
    return res.status(status_Code.Server_error).json({ message: error.message });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const user = await userModel.find({}).select('-__v')
    if(!user) {
      return res.status(status_Code.NotFound).json({message:'Not found data'})
    }
    return res.status(status_Code.success).json(user)
  } catch (error) {
   return res.status(status_Code.Server_error).json({message:error.message}) 
  }
}