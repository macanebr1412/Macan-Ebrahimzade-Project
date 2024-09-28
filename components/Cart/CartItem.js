import Image from "next/image";
import Link from "next/link";

function CartItem({ item }) {
  return (
    <Link
      href={`/products/${item.id}`}
      className="w-full  border-[3px] overflow-hidden border-primary-950 dark:border-primary-300 rounded-md hover:border-accent-700 relative "
    >
      <div className="relative aspect-video sm:aspect-square ">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 z-[1000] w-full bg-primary-100 dark:bg-primary-950 flex flex-col gap-3 items-center justify-center p-3 px-3 ">
        <h3 className="text-nowrap text-accent-800 text-center font-bold ">
          #{item.id} {item.title}
        </h3>
        <div className="flex justify-between items-center w-full">
          <p>Price</p>
          <p>{item.price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default CartItem;
