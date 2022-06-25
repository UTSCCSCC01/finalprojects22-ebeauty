import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please add a name'],
    unique: false,
  },
  title: {
    type: String,
    require: [true, 'please add a title']
  },
  address: {
    type: String,
    require: [true, 'please add an address']
  },
  city: {
    type: String,
    require: [true, 'please add a city']
  },
  state: {
    type: String,
    require: [true, 'please add a state']
  },
  country: {
    type: String,
    require: [true, 'please add a country']
  },
  email: {
    type: String,
    require: [true, 'please add a email'],
    unique: true
  },
  password: {
    type: String,
    require: [true, 'please add a password']
  },
  rating: {
    type: Number,
    require: true,
  },
  // reviews: [reviewSchema],
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
});

const TaskProvider = mongoose.model("TaskProvider", providerSchema);
export default TaskProvider;