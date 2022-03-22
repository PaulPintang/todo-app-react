const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
