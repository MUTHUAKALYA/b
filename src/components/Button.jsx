import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

const Button = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div>
      <button
        className="button bg-gray-200 px-5 py-2 m-5"
        onClick={() => setOpen(true)}
      >
        Save
      </button>

      <Popup
        open={open}
        position=""
        closeOnDocumentClick={false}
        onClose={() => setOpen(false)}
      >
        <span className="bg-green-300 px-5 py-2 rounded-sm font-medium fixed top-14 right-[520px] ">
          Your message was saved
        </span>
      </Popup>
    </div>
  );
};

export default Button;
