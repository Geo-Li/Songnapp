import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()}
          {} Zhuoyuan (Geo) Li. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
