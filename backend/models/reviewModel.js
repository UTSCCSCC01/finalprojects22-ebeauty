const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    // customerId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   require: true,
    //   ref: "Provider",
    // },
    // providerId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   require: true,
    //   ref: "Provider",
    // },
    reviewTitle: {
      type: String,
      require: true,
    },
    reviewMessage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema); 