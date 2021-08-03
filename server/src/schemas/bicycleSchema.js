const { Schema, model } = require("mongoose");

const bicycleSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 5,
      required: [true, "Name is required."],
    },
    type: {
      type: String,
      required: [true, "Type is required."],
    },
    color: {
      type: String,
      required: [true, "Color is required."],
    },
    wheel_size: {
      type: String,
      required: [true, "Wheel size is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
  },
  { versionKey: false, timestamps: true }
);

const Bicycle = model("Bicycle", bicycleSchema);

module.exports = Bicycle;
