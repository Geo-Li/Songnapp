import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const CreateReview = ({ songId, setOpenModal, refreshSong }) => {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = { content, song: songId };
    axios
      .post("http://127.0.0.1:8000/api/reviews/", newReview)
      .then((response) => {
        console.log(response.data);
        // Optionally, reset the form or show a success message
        refreshSong();
        setOpenModal(false); // Close the modal on success
      })
      .catch((error) => {
        console.error("There was an error creating the review!", error);
      });
  }
  return (
    <div className="container mx-auto p-4 text black">
      <h1 className="flex justify-center text-2xl font-bold mb-4">Create New Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="content">
            What's your thoughts?
          </label>
          <textarea
            className="appearance-none rounded-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
            Create Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;
