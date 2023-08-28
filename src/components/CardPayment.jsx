import React from "react";
import { Bitcoin, CircleDollarSign,CreditCard } from "lucide-react";
import Input from "./Input";
import Button from "./Button";

const CardPayment = () => {
  return (
    <div className="ring-1 w-full ring-slate-300 rounded-md p-4">
      <div className="flex flex-col items-start mb-5">
        <p className="font-medium">Payment Method</p>
        <p className="text-sm ">Add a new payment method to your account</p>
      </div>
      <div className="flex flex-row justify-between space-x-3">
        <div className="flex w-1/3 flex-col items-center py-3 ring-black hover:bg-gray-200 ring-1 rounded-md">
          <CreditCard size={24} />
          <span>Card</span>
        </div>
        <div className="flex w-1/3 flex-col items-center py-3 ring-black hover:bg-gray-200 ring-1 rounded-md">
          <Bitcoin size={24} />
          <span>Bitcoin</span>
        </div>
        <div className="flex w-1/3 flex-col items-center py-3 ring-black hover:bg-gray-200 ring-1 rounded-md">
          <CircleDollarSign size={24} />
          <span>Dollar</span>
        </div>
      </div>
      <div className="my-4 space-y-2">
        <label htmlFor="cardName">Name</label>
        <Input placeholder={"Complete Name: First Last"} />
      </div>
      <div className="w-full">
        <Button Class={"btn-primary"} text={"Add Card"} />
      </div>
    </div>
  );
};

export default CardPayment;
