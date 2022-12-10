const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.URLDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.log({ message: error.message });
    });
};
module.exports = dbConnection;
