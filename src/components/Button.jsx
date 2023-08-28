import React from "react";

const Button = ({ Class, text, onClick }) => {
  return (
    <button onClick={onClick} className={Class}>
      {text}
    </button>
  );
};

export default Button;
