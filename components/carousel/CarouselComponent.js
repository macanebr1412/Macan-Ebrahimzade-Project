"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItemm from "./CarouselItemm";
import SortingItems from "./SortingItems";
import { useItem } from "@/context/ItemContext";
import { useCallback, useEffect, useState } from "react";

function CarouselComponent({ curSort, items }) {
  const { selectedId } = useItem();
  const [randomItems, setRandomItems] = useState(items);

  // functioni ke vazife shuffel kardane item haro dare. Random sort bshan.
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // memoize mikonim chon too dependency useEffect gharar migire.
  const handleShuffel = useCallback(
    function handleShuffel() {
      const shuffleData = shuffleArray([...items]);
      setRandomItems(shuffleData);
    },
    [items]
  );

  // baraye inke dar mounting vaghti curSort="random" bashe item ha random bshan
  useEffect(
    function () {
      if (curSort === "random") {
        handleShuffel();
      }
    },
    [curSort, handleShuffel]
  );

  // marahele gharar dadane item entekhab shode dar avale list
  let selectedItem = selectedId
    ? items.slice().filter((item) => item.id === selectedId)?.[0]
    : null;

  let displayedItems = curSort === "random" ? randomItems : items;

  if (selectedId) {
    const displayeItemsWithoutSelected = displayedItems
      .slice()
      .filter((item) => item.id !== selectedId);

    displayedItems = [selectedItem, ...displayeItemsWithoutSelected];
  }

  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <p>No items available.</p>
      </div>
    );
  }
  return (
    <>
      <h2 className="text-2xl md:text-5xl text-accent-600 m-5 md:m-7">
        Item&apos;s Carousel
      </h2>
      <div className="flex flex-col m-auto items-center justify-center w-3/4">
        <SortingItems handleShuffel={handleShuffel} />
        <Carousel className="w-full">
          <CarouselContent>
            {displayedItems.map((item) => (
              <CarouselItem
                key={item.id}
                className=" sm:basis-1/2 lg:basis-1/3  lg:p-[20px]"
              >
                <CarouselItemm item={item} items={items} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent hover:bg-accent-700 border-accent-300 border-[3px]" />
          <CarouselNext className="bg-transparent hover:bg-accent-700 border-accent-300 border-[3px]" />
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
