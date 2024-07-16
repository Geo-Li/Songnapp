import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import DeleteButton from "../Button/DeleteButton";
import UpdateButton from "../Button/UpdateButton";
import DeleteConfirmation from "../DeleteConfirmation";
import UpdateReview from "./UpdateReview";

const ReviewItem = ({ review, refreshSong }) => {
  const [openModal, setOpenModal] = useState(false);
  const [delOpenModal, setDelOpenModal] = useState(false);

  function toDelete() {
    axios
      .delete(`http://127.0.0.1:8000/api/reviews/${review.id}/`)
      .then((response) => {
        console.log("Review deleted:", response.data);
        refreshSong(); // Refresh albums list
      })
      .catch((error) => {
        console.error("There was an error deleting the review!", error);
      });
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {review.content}
      <div className="flex flex-row scale-75 ml-2 space-x-2">
        <UpdateButton content={"Update"} setOpenModal={setOpenModal} />
        <DeleteButton content={"Delete"} setDelOpenModal={setDelOpenModal} />
      </div>
      {delOpenModal && (
        <Modal setOpenModal={setDelOpenModal}>
          <DeleteConfirmation content={"Delete"} toDelete={toDelete} />
        </Modal>
      )}
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <UpdateReview
            review={review}
            refreshSong={refreshSong}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </div>
  );
};

const ReviewList = ({ reviews, refreshSong }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mt-2">Reviews:</h3>
      <ul className="list-disc ml-8">
        {reviews.map((review) => (
          <li key={review.id} className="text-gray-700 text-base">
            <ReviewItem review={review} refreshSong={refreshSong} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
