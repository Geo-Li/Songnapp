import React from "react";

const DeleteButton = ({ content, toDelete, setDelOpenModal }) => {
    function handleClick() {
        if (toDelete) {
            toDelete();
        }
        if (setDelOpenModal) {
            setDelOpenModal(true);
        }
    }
  return (
    <>
      <button
        className="text-white bg-red-500 hover:bg-red-700
        font-medium rounded-lg text-sm px-3 py-2 text-center capitalize"
        onClick={handleClick}
      >
        {content}
      </button>
    </>
  );
};

export default DeleteButton;
