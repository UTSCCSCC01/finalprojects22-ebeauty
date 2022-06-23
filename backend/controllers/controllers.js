const asyncHandler = require('express-async-handler');

// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message:"get goal"});
})

// @desc post goal
// @route POST /api/goals
// @access Private
const postGoals = asyncHandler(async (req, res) => {

  let tmp = req.body;
  if (! tmp.movieId){
    res.status(400);
    throw new Error('add new movieid')
  }

  res.status(200).json({message:"post goal"});

})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message:`put (update) goal: ${req.params.id}`});
})

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message:`delete goal: ${req.params.id}`});
})

module.exports = {
  getGoals, postGoals, updateGoals, deleteGoals
}