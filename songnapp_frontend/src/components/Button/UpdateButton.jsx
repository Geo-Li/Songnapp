import React from "react";

const UpdateButton = ({ content, setOpenModal }) => {
  return (
    <>
      <button
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
        font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => setOpenModal(true)}
      >
        {content}
      </button>
    </>
  );
};

export default UpdateButton;
