const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId, 
    require: true, 
    ref: 'Provider'
  },
    movieId:{
      type: String,
      required: [true, "please add text."]
    }
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal',goalSchema);