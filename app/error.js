"use client";

import H1 from "@/components/ui/H1";
import MyButton from "@/components/ui/MyButton";
import P from "@/components/ui/P";

function Error({ reset, error }) {
  return (
    <div className="flex flex-col  items-center py-32 md:px-32 ">
      <H1>Error Occurs</H1>
      <P>{error.message}</P>
      <MyButton onClick={reset}>Reset</MyButton>
    </div>
  );
}

export default Error;
