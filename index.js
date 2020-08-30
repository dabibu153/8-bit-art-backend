const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const user = require("./routes/main");

mongoose
  .connect(
    "mongodb+srv://test-user153:qwerty123@cluster0.jrl5u.mongodb.net/8-bit-db?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to server...."))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use(cors());
app.all("/", (req, res) => {
  res.send("hello world!");
});
app.use("/api", user);

let port = 5000;

app.listen((PORT = process.env.PORT || port));
console.log("server started...");
