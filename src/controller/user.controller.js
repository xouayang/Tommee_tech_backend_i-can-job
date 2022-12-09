const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res) => {
  try {
    if (
      !req.body.username &&
      !req.body.password &&
      !req.body.position &&
      !req.body.phone &&
      !req.body.profile
    ) {
      return res.status(400).json({ message: "The body is not emty" });
    } else {
      const checkPhone = await userModel.findOne({ phone: req.body.phone });
      if (checkPhone) {
        return res
          .status(200)
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
        profile: user.profile,
        role: user.role,
        token: asignToken,
      };
      return res.status(201).json(returnUser);
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
exports.signIn = async (req, res) => {
  try {
    if (!req.body.username && !req.body.password) {
      return res.status(400).json({ message: "The body is not emty" });
    } else {
      const user = await userModel.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json({ message: "Not found user" });
      }
      const validationPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validationPassword) {
        return res.status(404).json({ message: "Password incorrect" });
      }
      const asignToken = await jwt.sign({ id: user._id, role: user.role });
      const return_SignIn = {
        username: user.username,
        password: user.password,
        role: user.role,
        token: asignToken,
      };
      return res.status(200).json(return_SignIn);
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
