import React from "react";

const CardItem = ({ image, title }) => {
  return (
    <div className="rounded-md hover:cursor-pointer flex-1 mb-4">
      <div className="inline-block w-52">
        <img
          className="rounded-md w-52 h-80 object-cover transition-transform transform-gpu hover:scale-105"
          src={image}
          alt="image"
        />
      </div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm ">{ "lorem ipsum"}</p>
    </div>
  );
};

export default CardItem;
