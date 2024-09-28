import CartItem from "./CartItem";
import SortBy from "./SortBy";

function CartComponent({ items, curSort }) {
  let displayedItems =
    curSort === "id"
      ? items.slice().sort((a, b) => a.id - b.id)
      : curSort === "PriceDesc"
      ? items
          .slice()
          .sort(
            (a, b) =>
              Number(b.price.split(".")[0]) - Number(a.price.split(".")[0])
          )
      : curSort === "PriceAsc"
      ? items
          .slice()
          .sort((a, b) =>
            Number(a.price.split(".")[0] - Number(b.price.split(".")[0]))
          )
      : items;

  return (
    <>
      <div className="flex justify-end w-full  mb-3 ">
        <SortBy sort={curSort} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2  lg:grid-cols-4 ">
        {displayedItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default CartComponent;
