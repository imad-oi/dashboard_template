import { useState } from "react";
import { useNavigate } from "react-router-dom";
const control = "./src/assets/control.png";

export default function Sidebar() {
  const [openSidebar, setopenSidebar] = useState(true);
  const [selcted, setSelcted] = useState(0);

  const router = useNavigate();
  const handleRoute = (url,index) => {
    setSelcted(index);
    router(url);
  };

  const menus = [
    { url: "/dashboard", title: "Dashboard", src: "Chart_fill" },
    { url: "/", title: "Inbox", src: "Chat" },
    { url: "/auth", title: "Authentication", src: "User", gap: true },
    { url: "/", title: "Schedule ", src: "Calendar" },
    { url: "/", title: "Search", src: "Search" },
    { url: "/", title: "Analytics", src: "Chart" },
    { url: "/components", title: "Components ", src: "Folder", gap: true },
    { url: "/Setting", title: "Setting", src: "Setting" },
  ];

  return (
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
        font-medium  text-xl duration-300 ${!openSidebar && "scale-0 hidden"}}`}
        >
          ByteBinders
        </h1>
      </div>

      <ul className="pt-6 ">
        {menus.map((menu, index) => (
          <>
            <li
              onClick={() => handleRoute(menu.url,index)}
              key={index}
              className={`text-gray-300 text-sm flex items-center
         gap-x-4 cursor-pointer p-2 hover:bg-light-white 
         rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${
                selcted === index && "bg-light-white"
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

      <div
        className={`flex justify-start items-center gap-x-2 duration-500
    ${
      openSidebar && "bg-light-white p-4"
    }  h-16 w-60 rounded-md absolute bottom-4`}
      >
        <img src="./src/assets/logo.png" alt="profile" />
        <div
          className={`text-gray-300 text-sm flex flex-col ${
            !openSidebar && "hidden"
          }`}
        >
          <span className="font-semibold">Jhon Doe</span>
          <span>Jhon@Doe.com</span>
        </div>
      </div>
    </div>
  );
}
