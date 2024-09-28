"use client";

import Link from "next/link";
import timeForFunWhite from "@/assets/time-for-fun-white.webp";
import timeForFunBlack from "@/assets/time-for-fun-black.png";
import Image from "next/image";
import { useMode } from "@/context/DarkModeContext";

function Logo() {
  // 2 ta logoImg baraye dark and light mode.
  const { mode } = useMode();
  return (
    <Link className="w-24 h-8 sm:w-32 md:w-40 xl:w-48" href="/">
      <Image
        src={mode !== "dark" ? timeForFunBlack : timeForFunWhite}
        alt="Time For Fun Logo"
      />
    </Link>
  );
}

export default Logo;
