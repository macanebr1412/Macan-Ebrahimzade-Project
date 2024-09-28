"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const options = [
  { value: "default", label: "default" },
  { value: "PriceAsc", label: "Sort by price (low first)" },
  { value: "PriceDesc", label: "Sort by price (high first)" },
  { value: "id", label: "id" },
];

function SortBy({ sort }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSortingItems(e) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", e.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <select
      className="text-xl py-3 px-5 border border-primary-950 bg-primary-100 dark:border-primary-50 rounded-sm dark:bg-primary-900 outline-none dark:text-primary-50"
      onChange={handleSortingItems}
      value={sort}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
