import express from 'express';
import asyncHandler from 'express-async-handler';
import TaskProvider from '../models/taskproviderModel.js';
const router = express.Router();

//@desc    Get all task providers
//@route   GET /api/v1/taskproviders
//@access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const taskProviders = await TaskProvider.find({});
    res.json(taskProviders);
  })
);

//@desc    Get a task provider
//@route   GET /api/v1/taskproviders/:id
//@access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const taskProvider = await TaskProvider.findById(req.params.id);
    // check if taskProvider exist
    if (taskProvider) {
      res.json(taskProvider);
    } else {
      res.status(404).json({ msg: 'TaskProvider not found' });
      throw new Error('TaskProvider not found');
    }
  })
);

export default router;