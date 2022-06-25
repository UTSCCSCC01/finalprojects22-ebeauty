import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { getAllPosts, postPosts, updatePost, deletePost } from '../controllers/postControllers.js';
const router = express.Router();

// currently, the new protect only let authroized provider post goal(should fix to post in future)
// if want one without the authentication, use the commented one below
router.route('/').get(getAllPosts).post(protect, postPosts);
router.route('/:id').put(protect, updatePost).delete(protect, deletePost);


/*
router.route('/').get(getGoals).post(postGoals);
// router.get('/', getGoals) & router.post('/', postGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals);
//router.put('/:id', updateGoals) & router.delete('/:id', deleteGoals)
*/

export default router;