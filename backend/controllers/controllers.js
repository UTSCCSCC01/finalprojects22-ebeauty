const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');



// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
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

  const goal = await Goal.create({
    movieId:tmp.movieId
  })

  res.status(200).json(goal);

})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); 

  if (!goal){
    res.status(400)
    throw new Error('Goal not found');
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updateGoal);
})

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); 

  if (!goal){
    res.status(400)
    throw new Error('Goal not found');
  }

  await goal.remove();

  res.status(200).json({id:req.params.id});
})

module.exports = {
  getGoals, postGoals, updateGoals, deleteGoals
}