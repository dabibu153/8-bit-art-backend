const mongoose = require("mongoose");

const canvasShareSchema = new mongoose.Schema({
  canvas: {
    type: Array,
  },
  bgcolor: {
    type: String,
  },
});

const CanvasShare = new mongoose.model("CanvasShare", canvasShareSchema);

module.exports.CanvasShare = CanvasShare;
