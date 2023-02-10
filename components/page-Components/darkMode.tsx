"use client";

import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

const DarkMode = () => {
  return (
    <div className="flex items-center gap-2">
      <IoSunny />
      <BsFillMoonStarsFill />
    </div>
  );
};

export default DarkMode;
