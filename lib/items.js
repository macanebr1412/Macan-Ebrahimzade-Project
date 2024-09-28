import { notFound } from "next/navigation";

// fetch kardan kole itemha
export async function getAllItems() {
  const res = await fetch(
    `https://66e20997c831c8811b57050e.mockapi.io/api/v1/home/items`
  );
  if (!res.ok) throw new Error("Sorry! Fetching data is not completed");
  const items = await res.json();
  return items;
}

// fetch kardam tak itemha vaghti dar urleshoon mirim
export async function getItem(id) {
  const res = await fetch(
    `https://66e20997c831c8811b57050e.mockapi.io/api/v1/home/items/${id}`
  );
  const item = await res.json();

  if (!item?.id) {
    notFound();
  }

  return item;
}
