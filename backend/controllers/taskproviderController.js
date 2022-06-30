import asyncHandler from 'express-async-handler';
import TaskProvider from '../models/taskproviderModel.js';

//@desc    Get all task providers
//@route   GET /api/v1/taskproviders?keyword=${keyword}
//@access  Public
const getTaskProviders = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        // search by name and title only
        // could remove name if product owner says so
        $or: [
          { name: { $regex: req.query.keyword, $options: 'i' } },
          { title: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};
  const taskProviders = await TaskProvider.find({ ...keyword });
  res.json(taskProviders);
});

//@desc    Get a task provider
//@route   GET /api/v1/taskproviders/:id
//@access  Public
const getTaskProviderById = asyncHandler(async (req, res) => {
  const taskProvider = await TaskProvider.findById(req.params.id);
  // check if taskProvider exist
  if (taskProvider) {
    res.json(taskProvider);
  } else {
    res.status(404).json({ msg: 'TaskProvider not found' });
    throw new Error('TaskProvider not found');
  }
});

export { getTaskProviders, getTaskProviderById };
