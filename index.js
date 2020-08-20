const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const user = require("./routes/main");

mongoose
  .connect("mongodb://localhost/8-bit-data")
  .then(() => console.log("connected to server...."))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use(cors());

app.use("/api", user);

app.listen((PORT = 5000), console.log("server started at 5000"));
