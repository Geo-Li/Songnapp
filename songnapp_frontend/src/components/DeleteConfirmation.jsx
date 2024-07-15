import React from "react";
import DeleteButton from "./Button/DeleteButton";

const DeleteConfirmation = ({ toDelete }) => {
  return (
    <div className="container mx-auto p-4 text black">
      <h1 className="flex justify-center text-2xl font-bold mb-4">
        Please confirm to DELETE this
      </h1>
      <div className="flex justify-center items-center">
        <DeleteButton content={"Delete"} toDelete={toDelete}/>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
