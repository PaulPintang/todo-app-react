const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: [true, "Please add a text field"],
    },
    status: {
      type: String,
      required: [true, "Please add a text field"],
    },
    completed: {
      type: Boolean,
      required: [true, "Please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
