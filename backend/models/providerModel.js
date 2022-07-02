import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please add a name']
  },

  imageFilename: {
    type: String,
    require: [true, 'please upload a image, this is file name of it']
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