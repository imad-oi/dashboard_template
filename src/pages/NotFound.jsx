import React from "react";
import Button from "../components/Button";

const url =
  "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_640.png";

const NotFound = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="p-7 flex flex-col  items-center justify-center w-full">
      <img className="w-96 h-96" src={url} alt="not found" />
      <span>
        <Button text="Go Back" Class={"btn-primary"} onClick={handleClick} />
      </span>
    </div>
  );
};

export default NotFound;
