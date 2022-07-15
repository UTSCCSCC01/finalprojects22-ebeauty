import mongoose from "mongoose";

const calendarSchema = mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Provider",
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  startTime: {
    type: String,
    required: [true, "please add start time."],
  },
  endTime: {
    type: String,
    required: [true, "please add end time."],
  },
  // rest true meaning provider want to have rest time in his working hours
  rest:{
    type: Boolean, 
    default: false
  }
}, {
  timestamps: true,
});

const Calendar = mongoose.model("Service", calendarSchema);
export default Calendar;