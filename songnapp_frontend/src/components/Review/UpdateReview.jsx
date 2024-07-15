import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const UpdateReview = ({ review, refreshSong, setOpenModal }) => {
  const [currReview, setCurrReview] = useState(review.review);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedReview = { review: currReview, song: review.song };
    axios
      .put(`http://127.0.0.1:8000/api/reviews/${review.id}/`, updatedReview)
      .then((response) => {
        console.log("Review updated:", response.data);
        refreshSong(); // Refresh albums list
        setOpenModal(false); // Close the modal
      })
      .catch((error) => {
        console.error("There was an error updating the review!", error);
      });
  };

  return (
    <div className="container mx-auto p-4 text black">
      <h1 className="flex justify-center text-2xl font-bold mb-4">
        Update Review
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="review">
            What's your thoughts?
          </label>
          <textarea
            className="appearance-none rounded-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="review"
            type="text"
            value={currReview}
            onChange={(e) => setCurrReview(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 shadow-lg shadow-teal-500/50
            font-medium rounded-md text-normal px-5 py-2.5 text-center my-3"
            type="submit"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
