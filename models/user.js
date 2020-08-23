const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 6,
  },
  canvas: {
    type: Array,
  },
  canvasName: {
    type: Array,
  },
});

const User = new mongoose.model("User", userSchema);

function validation(req, res) {
  const schema = Joi.object({
    userName: Joi.string().required().min(6),
  });

  return (result = schema.validate(req.body));
}

module.exports.User = User;
module.exports.validation = validation;
