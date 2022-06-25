const { createReview, getReviews, getSingleReview, deleteReview, updateReview } = require("../controllers/reviewController");
const express = require("express");

const router = express.Router();

// get all reviews
router.get("/", getReviews);

// get single review
router.get("/:reviewId", getSingleReview);

router.post("/", createReview);

// 
router.delete("/:reviewId", deleteReview);

router.patch("/:reviewId", updateReview);

module.exports = router
