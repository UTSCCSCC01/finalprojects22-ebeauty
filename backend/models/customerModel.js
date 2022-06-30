import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please add a name"],
    },

    email: {
      type: String,
      require: [true, "please add a email"],
      unique: true,
    },

    password: {
      type: String,
      require: [true, "please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);
