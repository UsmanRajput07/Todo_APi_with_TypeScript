import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
const MongoDB_Con = require("./MongoDB_Con/Mongo.config");
MongoDB_Con();

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./Routes/AllRoute"));
app.use("/api", require("./Routes/AllRoute"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
