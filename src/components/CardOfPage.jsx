import React from "react";

const CardOfPage = ({image, title}) => {
  return (
    <div className="rounded-md hover:cursor-pointer flex-1 mb-4">
      <div className="inline-block w-40">
        <img
          className="rounded-md w-40 h-40 object-cover transition-transform transform-gpu hover:scale-105"
          src={image}
          alt=""
        />
      </div>
      <p className="text-sm font-semibold"> {title} </p>
    </div>
  );
};

export default CardOfPage;
