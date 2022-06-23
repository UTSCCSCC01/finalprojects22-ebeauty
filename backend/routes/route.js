const express = require("express");
const router = express.Router();
const { getGoals, postGoals, updateGoals, deleteGoals } = require('../controllers/controllers');

router.route('/').get(getGoals).post(postGoals);
// router.get('/', getGoals) & router.post('/', postGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals);
//router.put('/:id', updateGoals) & router.delete('/:id', deleteGoals)

module.exports = router