import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import RefreshButton from "../Button/RefreshButton";
import CreateButton from "../Button/CreateButton";
import DeleteButton from "../Button/DeleteButton";
import DeleteConfirmation from "../DeleteConfirmation";
import UpdateButton from "../Button/UpdateButton";
import UpdateAlbum from "./UpdateAlbum";
import SongContainer from "../Song/SongContainer";
import CreatSong from "../Song/CreatSong";

const AlbumCard = ({ album, refreshAlbums }) => {
  const [currAlbum, setCurrAlbum] = useState(album);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);
  const [delOpenModal, setDelOpenModal] = useState(false);

  function toggleExpanded() {
    if (!isExpanded) {
      refreshAlbum();
    }
    setIsExpanded(!isExpanded);
  }

  function refreshAlbum() {
    axios
      .get(`http://127.0.0.1:8000/api/albums/${currAlbum.id}/`)
      .then((response) => {
        setCurrAlbum(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the albums!", error);
      });
  }

  function canDelete() {
    return currAlbum.songs.length == 0;
  }

  function toDelete() {
    axios
      .delete(`http://127.0.0.1:8000/api/albums/${currAlbum.id}/`)
      .then((response) => {
        console.log("Album deleted:", response.data);
        refreshAlbums(); // Refresh albums list
      })
      .catch((error) => {
        console.error("There was an error deleting the album!", error);
      });
  }

  return (
    <div className="relative flex flex-col max-w-sm border-2 border-black rounded-md overflow-hidden shadow-lg">
      <div className="absolute top-2 right-2">
        <div className="flex flex-row ml-2 space-x-2">
          <UpdateButton content={"Update"} setOpenModal={setOpenUpModal} />
          <DeleteButton content={"Delete"} setDelOpenModal={setDelOpenModal} />
        </div>
        {openUpModal && (
          <Modal setOpenModal={setOpenUpModal}>
            <UpdateAlbum
              album={album}
              refreshAlbum={refreshAlbum}
              setOpenModal={setOpenUpModal}
            />
          </Modal>
        )}
        {delOpenModal &&
          (canDelete() ? (
            <Modal setOpenModal={setDelOpenModal}>
              <DeleteConfirmation content={"Delete"} toDelete={toDelete} />
            </Modal>
          ) : (
            <Modal setOpenModal={setDelOpenModal}>
              <div className="container mx-auto p-4 text-black text-center">
                <h2 className="text-2xl font-bold my-4">
                  This Album is not Empty!
                </h2>
              </div>
            </Modal>
          ))}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 pt-10">{currAlbum.title}</div>
        <p className="text-gray-700 text-base">Artist: {currAlbum.artist}</p>
        <p className="text-gray-700 text-base mb-3">
          Release Date: {currAlbum.release_date}
        </p>
        <div className="flex flex-row justify-center items-center space-x-3 mt-2">
          <RefreshButton
            content={isExpanded ? "Hide Songs" : "Show Songs"}
            toRefresh={toggleExpanded}
          />
          <CreateButton content={"Add Song"} setOpenModal={setOpenModal} />
          {openModal && (
            <Modal setOpenModal={setOpenModal}>
              <CreatSong
                albumId={currAlbum.id}
                setOpenModal={setOpenModal}
                refreshAlbum={refreshAlbum}
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
            <SongContainer songs={currAlbum.songs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
