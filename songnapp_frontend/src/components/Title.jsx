import React from "react";

const Title = ({ children, id }) => {
  return (
    <h1
      className="text-2xl font-bold underline 
                 underline-offset-8 decoration-4
                 mb-5 text-black"
      id={id && id}
    >
      {children}
    </h1>
  );
};

export default Title;
