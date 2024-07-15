import React from "react";

const RefreshButton = ({ content, toRefresh }) => {
  return (
    <>
      <button
        className="text-stone-700 bg-gradient-to-r from-teal-200 to-lime-200 
        hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
        focus:ring-4 focus:outline-none focus:ring-lime-200 capitalize
        font-medium rounded-lg text-sm px-4 py-2.5 text-center mb-2"
        onClick={() => toRefresh()}
      >
        {content}
      </button>
    </>
  );
};

export default RefreshButton;
