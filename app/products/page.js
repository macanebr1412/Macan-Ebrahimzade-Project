import CartComponent from "@/components/Cart/CartComponent";
import Spinner from "@/components/spinner/Spinner";
import H1 from "@/components/ui/H1";
import { getAllItems } from "@/lib/items";
import { Suspense } from "react";

// chon route be vasete searchParams dynamic hast pas niazi b revalidate nis.
// export const revalidate = X;

export const metadata = {
  title: "Products",
};

async function ProductWrapper({ curSort }) {
  const items = await getAllItems();
  return <CartComponent items={items} curSort={curSort} />;
}

function Page({ searchParams }) {
  const curSort = searchParams?.sort ?? "default";
  return (
    <>
      <H1>
        Here you can explore all our products
        <br /> Have Fun :)
      </H1>
      <Suspense fallback={<Spinner />} key={curSort}>
        <ProductWrapper curSort={curSort} />
      </Suspense>
    </>
  );
}

export default Page;
