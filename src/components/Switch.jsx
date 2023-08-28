import React from "react";

const Switch = ({ text, darkModeEnabled, handleDarkModeToggle }) => {
  return (
    <label class="relative inline-flex items-center cursor-pointer  ">
      <input
        checked={!darkModeEnabled}
        onChange={handleDarkModeToggle}
        type="checkbox"
        value=""
        className="sr-only peer "
      />
      <div class="w-11 h-6 bg-gray-200  rounded-full peer  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-purple"></div>
      <span class="ml-3 text-sm font-medium text-gray-900  dark:text-white">
        {text || ""}
      </span>
    </label>
  );
};

export default Switch;
