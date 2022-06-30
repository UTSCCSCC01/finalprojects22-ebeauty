<<<<<<< HEAD
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
=======
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  provider_name: {
    type: String,
    require: true,
  },
  provider_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Provider'
  },
  postText: {
    type: String,
    required: [true, "please add text."]
  }
},
>>>>>>> 64d9256ca352c1fffb78bffdaa2dd3b4de96e5b0
  {
    timestamps: true,
  }
);
<<<<<<< HEAD

module.exports = mongoose.model("Post", postSchema);

=======

export default mongoose.model("Post", postSchema);
>>>>>>> 64d9256ca352c1fffb78bffdaa2dd3b4de96e5b0
