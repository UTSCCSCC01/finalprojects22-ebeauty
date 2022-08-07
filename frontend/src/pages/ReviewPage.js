import React, { useState } from "react";
import "../css/Review.css";
import { Rating, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const location = useLocation();
  const providerName = location.state.name;
  const providerId = location.state.providerId;
  const customerId = location.state.customerId;

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setReviewContent("");
        alert(`ERROR: PLEASE TRY LATER`);
      } else {
        setRating(null);
        setReviewContent("");
      }
    });

    await fetch(`/api/providers/${providerId}`, {
      method: "PATCH",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then((res) => {
      if(res.acknowledged){
        alert(`THATNKS FOR THE REVIEW!`);
        navigate("/customerorderhistory");
      } else {
        alert("ERROR FOR UPDATING RATING COUNTS");
      }
    });
  };

  return (
    <>
      <div className="review-container">
        <Typography variant="h3">How do you like {providerName}?</Typography>

        <div className="star-rating">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e, rating) => {
              setRating(rating);
            }}
            size="large"
          />
        </div>
        <form className="add-review" onSubmit={handleSubmit}>
          <textarea
            id="review-contents"
            placeholder="Please leave your thoughts here..."
            onChange={(e) => {
              setReviewContent(e.target.value);
            }}
            value={reviewContent}
          />
        </form>
        <div className="review-buttons">
          <button className="review-button" id="submit-review" onClick={handleSubmit}>
            Submit Review{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
