const reviewSchema = mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Provider",
    },
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Provider",
    },
    review_title: {
      type: String,
      require: true,
    },
    review_message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema); 