import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ReviewForm.css"; // Assuming this is the path to your CSS
import axios from "axios"
const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(3); // Default rating is set to the middle value

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:4000/api/reviews", {
        name,
        email,
        review,
        rating,
      });
      
      toast.success(response.data.message); // Display success message
      setName("");
      setReview("");
      setEmail("");
      setRating(3); // Reset rating to the default middle value
    } catch (error) {
      toast.error("Error submitting review. Please try again.");
    }
  };

  return (
    <div className="review-form-container">
      <ToastContainer /> {/* This will handle the toast notifications */}
      <h2>Submit Your Review</h2>
      <p className="thankyou">Thank you for choosing Bite Buzz</p>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email_input"
        />

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Review"
          value={review}
          rows={4}
          onChange={(e) => setReview(e.target.value)}
          required
        />

        <div className="rating-container">
          <label htmlFor="rating">Rate Us on a range of 5</label> <br />
          <br />
          <div className="emoji-range-wrapper">
            <input
              type="range"
              id="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            />
            {/* Emojis dynamically shown inside the slider */}
            <div className="emoji-range-overlay">
              <span className={`emoji ${rating >= 1 ? "active" : ""}`}>😕</span>
              <span className={`emoji ${rating >= 2 ? "active" : ""}`}>😐</span>
              <span className={`emoji ${rating >= 3 ? "active" : ""}`}>🙂</span>
              <span className={`emoji ${rating >= 4 ? "active" : ""}`}>😊</span>
              <span className={`emoji ${rating === 5 ? "active" : ""}`}>😍</span>
            </div>
          </div>
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
