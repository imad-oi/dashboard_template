import React from "react";
import DataCard from "../components/DataCard";

const Dashboard = () => {
  return (
    <div
      className={`p-7 text-2xl flex flex-col gap-y-4 font-semibold flex-1 h-screen overflow-y-scroll dark:bg-dark-purple`}
    >
      <div
        className="flex flex-col lg:flex-row space-y-4 lg:space-y-0
       justify-between gap-x-4"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-slate-200 w-full lg:w-1/4 border
             border-dark-purple border-dashed p-2 h-36 rounded-md lg:mb-4"
          >
            <DataCard />
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="bg-slate-200 w-1/2 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        <div className="bg-slate-200 w-1/2 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="bg-slate-200 w-full border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="bg-slate-200 w-2/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        <div className="bg-slate-200 w-1/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="bg-slate-200 w-1/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        <div className="bg-slate-200 w-2/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="bg-slate-200 w-1/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        <div className="bg-slate-200 w-1/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        <div className="bg-slate-200 w-1/3 border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
      </div>

      <div className="flex justify-between gap-x-4 ">
        <div className="flex flex-col gap-y-4  w-2/3 h-96">
          <div className="bg-slate-200 w-full border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
          <div className="bg-slate-200 w-full border border-dark-purple border-dashed p-2 h-48 rounded-md "></div>
        </div>

        <div className="bg-blue-300 w-1/3 h-96">
          <div className="bg-slate-200 w-full border border-dark-purple border-dashed p-2 h-96 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
