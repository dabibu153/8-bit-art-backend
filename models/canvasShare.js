const mongoose = require("mongoose");

const canvasShareSchema = new mongoose.Schema({
  canvas: {
    type: Array,
  },
});

const CanvasShare = new mongoose.model("CanvasShare", canvasShareSchema);

module.exports.CanvasShare = CanvasShare;
