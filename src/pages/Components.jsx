import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import CardPayment from "../components/CardPayment";
import Input from "../components/Input";
import Table from "../components/Table";
import TextArea from "../components/TextArea";

const Components = () => {
  return (
    <div className={`p-7  flex-1 h-screen overflow-y-scroll dark:bg-dark-purple `}>
      <h1 className="text-xl py-4 font-semibold">Components</h1>
      <div className="flex items-center justify-around space-x-2">
        <div className="bg-gray-200 h-32 w-1/3 rounded-md relative flex items-center justify-center px-4 ">
          <Input placeholder={"Enter text"} />
        </div>
        <div className="bg-gray-200 h-32 w-1/3 rounded-md relative flex items-center justify-center px-10">
          <div>
            <Button Class={"btn-primary"} text={"Button"} />
          </div>
        </div>
        <div className="bg-gray-200 h-32 w-1/3 px-6 rounded-md flex items-center justify-center">
          <TextArea placeholder={"Enter text"} />
        </div>
      </div>

      <div>
        <h1 className="text-xl py-4 font-semibold">Card</h1>
        <div className="flex flex-col items-start justify-between lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
          <div className="md:w-1/3">
            <Card />
          </div>
          <div className="lg:w-1/3">
            <CardPayment />
          </div>
          <div className="lg:w-1/3">
            {/* <CardPayment /> */}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl py-4 font-semibold">Alert</h1>
        <div className="flex items-center justify-start space-x-2">
          <h3>Comming soon...</h3>
        </div>
      </div>
      <div>
        <h1 className="text-xl py-4 font-semibold">Search bar</h1>
        <div className="flex items-center justify-start space-x-2">
          <h3>Comming soon...</h3>
        </div>
      </div>
      <div>
        <h1 className="text-xl py-4 font-semibold">Table</h1>
        <div className="flex items-center justify-start space-x-2">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Components;
