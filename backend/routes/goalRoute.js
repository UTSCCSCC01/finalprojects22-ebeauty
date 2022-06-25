const express = require("express");
const router = express.Router();
const { getGoals, postGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');

// protect that only providers can edit posts
const {protect} = require('../middleware/authMiddleware');

// currently, the new protect only let authroized provider post goal(should fix to post in future)
// if want one without the authentication, use the commented one below
router.route('/').get(protect, getGoals).post(protect, postGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);


/*
router.route('/').get(getGoals).post(postGoals);
// router.get('/', getGoals) & router.post('/', postGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals);
//router.put('/:id', updateGoals) & router.delete('/:id', deleteGoals)
*/

module.exports = router