import mongoose from "mongoose"
import config from "../Config/default"
if (!config.MongoDb_Url) {
  console.error("mongodb url is not definein the .env file");
}
const MongoDB_Con = () => {
  mongoose
    .connect(config.MongoDb_Url)
    .then(() => console.log("MongoDB connected")).catch(()=>console.log("Connection failed"))
};

module.exports = MongoDB_Con;
