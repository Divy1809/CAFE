import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="border p-2 mb-2">
          <p>{review.text}</p>
          {review.photo && <img src={URL.createObjectURL(review.photo)} alt="Review" className="mt-2" />}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;