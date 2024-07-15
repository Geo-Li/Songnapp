import React from "react";

const Modal = ({ children, setOpenModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg mx-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            className="absolute top-2 right-2 p-1 rounded-md bg-red-500 hover:bg-red-700 text-white"
            onClick={() => setOpenModal(false)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
