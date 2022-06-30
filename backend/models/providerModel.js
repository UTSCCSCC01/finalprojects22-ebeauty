import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please add a name']
  },

  email: {
    type: String,
    require: [true, 'please add a email'],
    unique: true
  },

  password: {
    type: String,
    require: [true, 'please add a password']
  }
}, {
  timestamps: true
});

export default mongoose.model("Provider", providerSchema);