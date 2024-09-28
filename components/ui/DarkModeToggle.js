"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useMode } from "@/context/DarkModeContext";

function DarkOrLightModeToggle() {
  const { mode, handleChangeMode } = useMode();
  return (
    <button
      className="bg-transparent border-none p-2 rounded-full transition-all hover:bg-accent-600"
      onClick={handleChangeMode}
    >
      {mode === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}

export default DarkOrLightModeToggle;
