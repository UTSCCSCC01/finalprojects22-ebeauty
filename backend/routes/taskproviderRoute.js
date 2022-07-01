import express from 'express';
import asyncHandler from 'express-async-handler';
import TaskProvider from '../models/taskproviderModel.js';
import {
  getTaskProviders,
  getTaskProviderById,
} from '../controllers/taskproviderController.js';
const router = express.Router();

router.route('/').get(getTaskProviders);
router.route('/:id').get(getTaskProviderById);

export default router;
