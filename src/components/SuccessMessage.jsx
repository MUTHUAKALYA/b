import React from "react";

const SuccessMessage = ({ className }) => {
  return (
    <div className="bg-gray-100">
      <span className="bg-green-300 text-gray-800 px-5 py-2">
        Your message was saved
      </span>
    </div>
  );
};

export default SuccessMessage;
