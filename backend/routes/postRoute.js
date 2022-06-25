const express = require("express");
const router = express.Router();
const { getAllPosts, postPosts, updatePost, deletePost } = require('../controllers/postControllers');

// protect that only providers can edit posts
const {protect} = require('../middleware/authMiddleware');

// currently, the new protect only let authroized provider post, but all people can see the posts from all providers
// if want one without the authentication, use the commented one below
router.route('/').get(getAllPosts).post(protect, postPosts);
router.route('/:id').put(protect, updatePost).delete(protect, deletePost);

router.route('/reviews', (req, res) => {
  res.json({msg: "Get all reviews"})
})

router.route('/reviews/:reviewId', (req, res) => {
  res.json({msg: `Get a single review with id = ${req.params.reviewId}`})
})




/*
router.route('/').get(getPosts).post(postPosts);
// router.get('/', getPosts) & router.post('/', postPosts)

router.route('/:id').put(updatePost).delete(deletePost);
//router.put('/:id', updatePost) & router.delete('/:id', deletePost)
*/

module.exports = router