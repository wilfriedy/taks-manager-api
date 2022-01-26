const exp = require("constants");
const express = require("express");
const app = express();
const router = require("./routes/tasksroutes");
const mongoose__connection = require("./db/connection");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await mongoose__connection(process.env.MONGO_URI);
    app.listen(3000, () => console.log("running"));
  } catch (err) {
    console.log(err);
  }
};

start();
