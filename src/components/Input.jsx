import React from "react";

const Input = ({type, placeholder,className}) => {
  return (
    <input
      type={type}
      className={className ? className : "input"}
      placeholder={placeholder}
    />
  );
};

export default Input;
