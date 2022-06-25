const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    provider_name: {
      type: String,
      require: true,
    },
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Provider",
    },
    postText: {
      type: String,
      required: [true, "please add text."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

