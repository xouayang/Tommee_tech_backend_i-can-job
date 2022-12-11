const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbconfig = require("./dbconfig");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb", extends: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
dbconfig();
app.use("/uploads", express.static(__dirname + "/uploads"));
const userRouter = require("./src/router/user.router");
const learnRouter = require("./src/router/learn.router");
const ruleRouter = require("./src/router/rule.router");
app.get('/upload', (req, res) => {
    res.send(req.files)
})
app.use("/", userRouter);
app.use("/", learnRouter);
app.use("/", ruleRouter);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
