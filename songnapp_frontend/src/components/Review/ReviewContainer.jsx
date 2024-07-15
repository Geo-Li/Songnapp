import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title";
import Modal from "../Modal";
import RefreshButton from "../Button/RefreshButton";
import CreateButton from "../Button/CreateButton";
import ReviewCard from "./ReviewCard";

const ReviewContainer = () => {
  const [songs, setSongs] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function refreshSongs() {
    axios
      .get("http://127.0.0.1:8000/api/songs/")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the songs!", error);
      });
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <Title>Review List</Title>
          <RefreshButton content={"Get Reviews"} toRefresh={refreshSongs} />
        </div>
        <div
          className="container flex flex-col md:flex-row items-center justify-center
          mx-auto p-4 mb-4 border-2 rounded-md border-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.map((song) => (
              <ReviewCard
                key={song.id}
                song={song}
                refreshSongs={refreshSongs}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
