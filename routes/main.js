const express = require("express");
const router = express.Router();
const { User, validation } = require("../models/user");
const { CanvasShare } = require("../models/canvasShare");

router.post("/userName", async (req, res) => {
  const result = validation(req, res);
  if (result.error) {
    res.send("bad input for login");
    return;
  }

  const user = await User.findOne({ userName: req.body.userName });
  if (user) {
    res.send("existing user found");
    return;
  }

  const new_user = new User({
    userName: req.body.userName,
    canvas: [
      [
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
        [
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
          "#61daf9",
        ],
      ],
    ],
    canvasName: "ignoreThis",
    bgcolor: "#61daf9",
  });
  await new_user.save();
  res.send("fresh account added");
});

router.post("/userData", async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (user) {
    res.send(user);
    return;
  }
});

router.put("/canvasSave", async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });

  user.canvas.push(req.body.sentCanvas);
  user.canvasName.push(req.body.sentCanvasName);
  user.bgcolor.push(req.body.bgcolor);
  user.save();
  res.send("done");
});

router.post("/canvasShare", async (req, res) => {
  const new_canvasShare = new CanvasShare({
    canvas: req.body.sentCanvasShare,
    bgcolor: req.body.bgcolor,
  });
  await new_canvasShare.save();
  res.send(new_canvasShare);
});

router.post("/canvasGet", async (req, res) => {
  const canvas = await CanvasShare.findOne({ _id: req.body.canvasId });
  if (canvas) {
    res.send(canvas);
    return;
  }

  res.send("no canvas found");
});

module.exports = router;
