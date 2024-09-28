"use client";

import H1 from "@/components/ui/H1";
import MyButton from "@/components/ui/MyButton";
import P from "@/components/ui/P";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center md:px-32 py-32">
      <H1>Not Found</H1>
      <P>This page could not be found :(</P>
      <MyButton onClick={router.back}>Back</MyButton>
    </div>
  );
}

export default NotFound;
