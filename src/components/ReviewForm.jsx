import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ text, photo });
    setText('');
    setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="border p-2 w-full"
      />
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0 ])}
        className="mt-2"
      />
      <button type="submit" className="btn mt-2">Submit Review</button>
    </form>
  );
};

export default ReviewForm;