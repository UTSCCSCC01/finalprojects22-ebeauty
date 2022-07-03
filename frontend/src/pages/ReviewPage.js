import React, { useState } from "react";
import "../css/Review.css";
import { Rating } from '@mui/material';

const Review = () => {
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewContent, setReviewContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerId = "customer1"
    const providerId = "provider1"
    const review = { customerId, providerId, reviewContent, rating };

    await fetch("/api/reviews/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        setRating(null);
        setHover(null);
        setReviewContent("");
        alert(`ERROR: PLEASE TRY LATER`);
      } else {
        setError(null);
        setRating(null);
        setHover(null);
        setReviewContent("");
        alert(`THATNKS FOR THE REVIEW!`);
      }
    });
  };

  return (
    <>
      <div className="review-container">
        <h1 className="title">How do you like the service today?</h1>
        <div className="star-rating">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e, rating) => {
              console.log(rating);
              setRating(rating);
            }}
            size="large"
          />
        </div>
        <form className="add-review" onSubmit={handleSubmit}>
          <textarea
            id="review-contents"
            placeholder="Hello?"
            onChange={(e) => {
              setReviewContent(e.target.value);
            }}
            value={reviewContent}
          />          
        </form>
        <div className="review-buttons">
          <button className="review-button" id="skip-review">Skip </button>
          <button className="review-button" id="submit-review" onClick={handleSubmit}>Submit Review </button>
        </div>
      </div>
    </>
  );
};

export default Review;
