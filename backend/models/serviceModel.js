import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Provider",
  },
  category: {
    type: String,
    require: true,
    enum: ["Admin", "Barbering", "Eyelash Tech", "Nail Tech", "Hairdressing",
      "House Cleaning", "Landscaping", "Makeup", "Massage", "Other"]
  },
  name: {
    type: String,
    require: true,
    unique: false,
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  duration: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;