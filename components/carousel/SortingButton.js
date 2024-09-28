"use client";

import { useItem } from "@/context/ItemContext";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MyButton from "../ui/MyButton";

function SortingButton({ sort, handleShuffel }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { handleChangeSelectedId } = useItem();

  function handleSortingItems(sort) {
    // aval az hame selectedId ro null mikonim ke sorting kamel random she
    handleChangeSelectedId(null);

    // functioni ke bahash random mikonim sorting item ha ro
    handleShuffel();
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <MyButton onClick={() => handleSortingItems(sort)}>Sort {sort}</MyButton>
  );
}

export default SortingButton;
