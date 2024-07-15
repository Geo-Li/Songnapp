import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const CreateAlbum = ({ setOpenModal, refreshAlbums }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newAlbum = { title, artist, release_date: releaseDate };
    axios
      .post("http://127.0.0.1:8000/api/albums/", newAlbum)
      .then((response) => {
        console.log(response.data);
        // Optionally, reset the form or show a success message
        refreshAlbums();
        setOpenModal(false); // Close the modal on success
      })
      .catch((error) => {
        console.error("There was an error creating the album!", error);
      });
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="flex justify-center text-2xl font-bold mb-4">Create New Album</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="appearance-none rounded-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="artist">
            Artist
          </label>
          <input
            className="appearance-none rounded-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="releaseDate">
            Release Date
          </label>
          <input
            className="appearance-none rounded-border w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="releaseDate"
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
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
          Create Album
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAlbum;
