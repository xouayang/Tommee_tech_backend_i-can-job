const jwt = require("jsonwebtoken");
const {status_Code} = require('../middleware/statusCode')
const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];

    if (!token) {
      return res.status(status_Code.Not_Token_Provide).json({ message: "No token provided!" });
    }
    const tokenSplit = token.split(" ");

    if (tokenSplit[0] != "Bearer" || !tokenSplit[1]) {
      return res.status(status_Code.Not_Token_Provide).json({ message: "Invalid token" });
    }
    const payload = jwt.verify(tokenSplit[1], "secret");

    if (!payload) {
      return res.status(status_Code.unauthorized).json({ message: "Not Authorized..." });
    }

    req.payload = payload;
    next();
  } catch (err) {
    return res.status(status_Code.unauthorized).json({ message: err.message });
  }
};
const getRole = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];

    if (!token) {
      return res.status(status_Code.Not_Token_Provide).json({ message: "No token provided!" });
    }
    const tokenSplit = token.split(" ");

    if (tokenSplit[0] != "Bearer" || !tokenSplit[1]) {
      return res.status(status_Code.Not_Token_Provide).json({ message: "Invalid token" });
    }
    const {role} = jwt.verify(tokenSplit[1], "secret");

    if (!role) {
      return res.status(status_Code.unauthorized).json({ message: "Not Authorized..." });
    }

    req.payload = role;
    next();
  } catch (err) {
    return res.status(status_Code.unauthorized).json({ message: err.message });
  }
};
module.exports = { verifyToken,getRole };

