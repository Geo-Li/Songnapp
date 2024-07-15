import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import RefreshButton from "../Button/RefreshButton";
import CreateButton from "../Button/CreateButton";
import DeleteButton from "../Button/DeleteButton";
import UpdateButton from "../Button/UpdateButton";
import DeleteConfirmation from "../DeleteConfirmation";
import ReviewList from "./ReviewList";
import CreateReview from "./CreateReview";
import UpdateReview from "./UpdateReview";

const ReviewCard = ({ song, refreshSongs }) => {
  const [currSong, setCurrSong] = useState(song);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [delOpenModal, setDelOpenModal] = useState(false);

  function toggleExpanded() {
    if (!isExpanded) {
      refreshSong();
    }
    setIsExpanded(!isExpanded);
  }

  function refreshSong() {
    axios
      .get(`http://127.0.0.1:8000/api/songs/${currSong.id}/`)
      .then((response) => {
        setCurrSong(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the songs!", error);
      });
  }

  function canDelete() {
    return currSong.reviews.length == 0;
  }

  function toDelete() {
    axios
      .delete(`http://127.0.0.1:8000/api/songs/${currSong.id}/`)
      .then((response) => {
        console.log("Song deleted:", response.data);
        refreshSongs(); // Refresh albums list
      })
      .catch((error) => {
        console.error("There was an error deleting the song!", error);
      });
  }

  return (
    <div className="relative flex flex-col max-w-sm border-2 border-black rounded-md overflow-hidden shadow-lg">
      <div className="absolute top-2 right-2">
        <div className="flex flex-row ml-2 space-x-2">
          <UpdateButton content={"Update"} setOpenModal={setOpenModal} />
          <DeleteButton content={"Delete"} setDelOpenModal={setDelOpenModal} />
        </div>
        {delOpenModal &&
          (canDelete() ? (
            <Modal setOpenModal={setDelOpenModal}>
              <DeleteConfirmation content={"Delete"} toDelete={toDelete} />
            </Modal>
          ) : (
            <Modal setOpenModal={setDelOpenModal}>
              <div className="container mx-auto p-4 text-black text-center">
                <h2 className="flex justify-center text-2xl font-bold my-4">
                  This Song still has reviews!
                </h2>
              </div>
            </Modal>
          ))}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5 pr-12">{currSong.title}</div>
        <div className="flex flex-row justify-center items-center space-x-3 mt-2">
          <RefreshButton
            content={isExpanded ? "Hide Reviews" : "Show Reviews"}
            toRefresh={toggleExpanded}
          />
          <CreateButton content={"Add Review"} setOpenModal={setOpenModal} />
          {openModal && (
            <Modal setOpenModal={setOpenModal}>
              <CreateReview
                songId={currSong.id}
                setOpenModal={setOpenModal}
                refreshSong={refreshSong}
              />
            </Modal>
          )}
        </div>
        <div>
          <div
            className={`expandable-content text-base ${
              isExpanded ? "expand" : ""
            }`}
          >
            <ReviewList reviews={currSong.reviews} refreshSong={refreshSong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
