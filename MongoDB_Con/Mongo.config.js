require("dotenv").config();
const mongoose = require("mongoose");
// import Mongo_Conn from "../Config/default"
if (!process.env.MongoDB_url) {
  console.error("mongodb url is not define in the .env file");
}
const MongoDB_Con = () => {
  mongoose
    .connect(process.env.MongoDB_url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
};

module.exports = MongoDB_Con;
