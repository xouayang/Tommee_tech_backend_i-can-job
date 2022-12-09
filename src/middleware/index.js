const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    res.status(400).json({ error: "No token provided" });
  }
  const token = req.headers["authorization"];

  const payload = await jwt.verify(token, "SECRET");
  if (!payload) {
    res.status(400).json({ error: "No authorized" });
  }
  req.payload = payload;
  next();
};
const getRole = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    res.status(400).json({ error: "No token provided" });
  }
  const token = req.headers["authorization"];

  const { role } = await jwt.verify(token, "SECRET");
  if (!role) {
    res.status(400).json({ error: "No authorized" });
  }
  req.role = role;
  next();
};
module.exports = { verifyToken, getRole };
