import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Customer Reviews</h1>
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewPage;