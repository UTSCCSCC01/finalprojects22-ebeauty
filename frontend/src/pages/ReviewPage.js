import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../css/Review.css";

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
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            console.log("ratingValue: ", ratingValue);
            console.log("rating: ", rating);

            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e539"}
                  size={60}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
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
