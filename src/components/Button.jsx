import React from "react";

const Button = ({ Class, text }) => {
  return (
    <button
      className={Class}
    >
      {text}
    </button>
  );
};

export default Button;
