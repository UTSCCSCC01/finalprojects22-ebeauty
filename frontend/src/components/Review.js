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

    const response = await fetch("/api/reviews/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log("add review failed");
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setRating(null);
      setHover(null);
      setReviewContent("");
      console.log("New review added!");
    }
  };

  return (
    <>
      <div className="review-container">
        <h1 className="title">How do you like the service today? Start rating!</h1>
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

        <h2>{rating}</h2>
        <h2>{reviewContent}</h2>
      </div>
    </>
  );
};

export default Review;
