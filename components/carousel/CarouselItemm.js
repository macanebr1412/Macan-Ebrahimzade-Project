"use client";
import { useItem } from "@/context/ItemContext";
import Image from "next/image";
import Link from "next/link";

function CarouselItemm({ item }) {
  const { price, title, image, type } = item;
  const { handleChangeSelectedId } = useItem();
  return (
    <Link
      className="block border-[2px] border-primary-900 dark:border-primary-100 transition-all hover:border-accent-400 rounded-md group "
      href={`/products/${item.id}`}
      onClick={() => handleChangeSelectedId(item.id)}
    >
      <div className="w-full relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover  rounded-t-md group-hover:scale-[1.1]"
        />
      </div>
      <div className="w-full py-4 px-2 group-hover:hidden">
        <h3 className="text-center font-bold text-lg mb-2 text-accent-500 text-nowrap	">
          {item.title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="dark:text-primary-400 text-primary-600 text-nowrap	">
            type:{" "}
            <span className="dark:text-primary-200 text-primary-950">
              {type}
            </span>
          </p>
          <p className="dark:text-primary-400 text-primary-600 text-nowrap">
            price:{" "}
            <span className="dark:text-primary-200 text-primary-950">
              {price}$
            </span>
          </p>
        </div>
      </div>
      <div className="w-full py-4 px-2 hidden group-hover:block">
        <h3 className="text-center font-bold text-lg mb-2 text-accent-500">
          You can read more in details page
        </h3>
        <p className="text-center text-xl">
          Just by <span>Clicking</span>
        </p>
      </div>
    </Link>
  );
}

export default CarouselItemm;
