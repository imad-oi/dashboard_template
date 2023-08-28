import { DollarSign } from "lucide-react";
import React from "react";

const DataCard = () => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center">
        <p className="text-lg">Total Revenue</p>
        <DollarSign size={24} />
      </div>
      <div className="flex flex-col">
        <p className="">
          <span className="text-4xl font-bold">$ 1,000,000</span>
        </p>
        <p className="text-sm text-gray-500">Since last month</p>
      </div>
    </div>
  );
};

export default DataCard;
