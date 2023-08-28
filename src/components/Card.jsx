import React from "react";
import Input from "./Input";
import Button from "./Button";

const Card = () => {
  return (
    <div className="card">
      <div className="py-2">
        <p className="text-xl font-semibold">Create Card</p>
        <p className="text-sm font-semibold text-gray-500">
          Deploy your new project in one-click
        </p>
      </div>

      <div className="py-1 space-y-2">
        <div className="flex flex-col justify-between items-start space-y-1">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Name
          </label>
          <Input placeholder={"Enter name"} type={"text"} />
        </div>

        <div className="flex flex-col justify-between items-start space-y-1">
          <label htmlFor="email" className="font-semibold text-gray-700">
            Email
          </label>
          <Input type={"email"} placeholder={"Enter email"} />
        </div>
      </div>
      <div className="flex justify-between py-3 mt-1">
        <Button Class={"btn-secondary"} text={"Cancel"} />
        <div>
          <Button Class={"btn-primary"} text={"Deploy"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
