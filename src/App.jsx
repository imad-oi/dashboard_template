import { useState } from "react";
import { useNavigate } from "react-router-dom";

const control = "./src/assets/control.png";

function App() {
  const [openSidebar, setopenSidebar] = useState(true);

  const [isDarkMode, setisDarkMode] = useState(false);

  


  return (
    // <div className="">
      <div
        className={`p-7 text-2xl flex flex-col gap-y-4 font-semibold flex-1 h-screen overflow-y-scroll ${
          isDarkMode && "bg-black"
        } `}
      >
        <div
          className={`h-10 w-full flex justify-end `}
        >
          <button
            className="bg-blue-300 text-white text-sm font-semibold rounded-md px-4 py-2"
            onClick={() => setisDarkMode((prev) => !prev)}
          >
            {!isDarkMode ? "Dark Mode" : "Light Mode"}
          </button>
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
    // </div>
  );
}

export default App;
