import { useState } from "react";

const control = "./src/assets/control.png";

function App() {
  const [openSidebar, setopenSidebar] = useState(true);

  const menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          openSidebar ? "w-72" : "w-20"
        } h-screen p-5 pt-8  bg-dark-purple relative duration-500 `}
      >
        <img
          onClick={() => setopenSidebar((prev) => !prev)}
          src={control}
          alt="control"
          className={`absolute cursor-pointer rounded-full 
          -right-3 top-10 border-2 border-dark-purple  w-6 h-6
          ${!openSidebar && "rotate-180 duration-75"}
          `}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            alt="logo"
            className={`cursor-pointer duration-500 ${
              !openSidebar && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left 
            font-medium  text-xl duration-300 ${
              !openSidebar && "scale-0 hidden"
            }}`}
          >
            ByteBinders
          </h1>
        </div>

        <ul className="pt-6 ">
          {menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center
             gap-x-4 cursor-pointer p-2 hover:bg-light-white 
             rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                }`}
              >
                <img src={`./src/assets/${menu.src}.png`} />
                <span
                  className={`${
                    !openSidebar && "hidden"
                  } origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>

        <div className={`flex justify-start items-center gap-x-2 duration-500
        ${openSidebar && "bg-light-white p-4"}  h-16 w-60 rounded-md absolute bottom-4`}>
          <img src="./src/assets/logo.png" alt="profile" />
          <div className={`text-gray-300 text-sm flex flex-col ${!openSidebar && "hidden"}`}>
            <span className="font-semibold">Jhon Doe</span>
            <span>Jhon@Doe.com</span>
          </div>
        </div>
      </div>

      <div className="p-7 text-2xl flex flex-col gap-y-4 font-semibold flex-1 h-screen overflow-y-scroll ">
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
    </div>
  );
}

export default App;
