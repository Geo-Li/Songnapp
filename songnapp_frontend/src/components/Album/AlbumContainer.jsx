import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title";
import Modal from "../Modal";
import RefreshButton from "../Button/RefreshButton";
import CreateButton from "../Button/CreateButton";
import AlbumCard from "./AlbumCard";
import CreateAlbum from "./CreateAlbum";

const AlbumContainer = () => {
  const [albums, setAlbums] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function refreshAlbums() {
    axios
      .get("http://127.0.0.1:8000/api/albums/")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the albums!", error);
      });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <Title>Album List</Title>
          <div className="flex flex-row space-x-3">
            <RefreshButton content={"Get Albums"} toRefresh={refreshAlbums} />
            <CreateButton content={"Add Album"} setOpenModal={setOpenModal} />
            {openModal && (
              <Modal setOpenModal={setOpenModal}>
                <CreateAlbum
                  setOpenModal={setOpenModal}
                  refreshAlbums={refreshAlbums}
                />
              </Modal>
            )}
          </div>
        </div>
        <div
          className="container flex flex-col md:flex-row items-center justify-center
          mx-auto p-4 mb-4 border-2 rounded-md border-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                refreshAlbums={refreshAlbums}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumContainer;
