import React from "react";
import SongCard from "./SongCard";

const SongContainer = ({ songs }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mt-2">Songs:</h3>
      <ul className="list-disc ml-8">
        {songs.map((song) => (
          <li key={song.id} className="text-gray-700 text-base">
            <SongCard song={song} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongContainer;
