import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="min-h-screen bg-[#0a0302] text-amber-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-amber-500 mb-6">Wizarding Reviews</h1>
        <ReviewForm addReview={addReview} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewPage;