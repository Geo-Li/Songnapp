import React from "react";

const CreateButton = ({ content, setOpenModal }) => {
  return (
    <>
      <button
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 
        font-medium rounded-lg text-sm px-4 py-2.5 text-center mb-2 capitalize"
        onClick={() => setOpenModal(true)}
      >
        {content}
      </button>
    </>
  );
};

export default CreateButton;
