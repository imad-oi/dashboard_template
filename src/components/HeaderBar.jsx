import React, { useEffect, useState } from "react";
import Input from "./Input";
import { SearchIcon } from "lucide-react";
import Switch from "./Switch";

const HeaderBar = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className={`flex items-center justify-between dark:bg-dark-purple px-4 pt-3 pb-2 border border-b-slate-400`}>
      <div className="w-2/4 lg:w-1/4 relative">
        <Input placeholder="Search . . ." />
        <SearchIcon
          size={20}
          className="absolute top-2 right-2 text-slate-500"
        />
      </div>
      <Switch
        text={"Dark mode"}
        darkModeEnabled={!isDarkMode}
        handleDarkModeToggle={() => setisDarkMode((prev) => !prev)}
      />
    </div>
  );
};

export default HeaderBar;
