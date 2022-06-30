const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    customerId: {
      type: String,
      require: true,
      // ref: "Customer",
    },
    providerId: {
      type: String,
      require: true,
      // ref: "Provider",
    },
    reviewContent: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema); 