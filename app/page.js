import CarouselComponent from "@/components/carousel/CarouselComponent";
import Spinner from "@/components/spinner/Spinner";
import H1 from "@/components/ui/H1";
import P from "@/components/ui/P";
import { getAllItems } from "@/lib/items";
import Link from "next/link";
import { Suspense } from "react";

// Chonke route be vaseteye searchParams dynamic hast pas niazi be revalidate nis
// export const revalidate = X;

async function CarouselWrapper({ curSort }) {
  const items = await getAllItems();
  return <CarouselComponent curSort={curSort} items={items} />;
}

function Page({ searchParams }) {
  const curSort = searchParams?.sort ?? "default";

  return (
    <>
      <H1>
        Welcome to this demo website, designed and developed by{" "}
        <span className="inline-block py-2 text-accent-700 dark:text-accent-200">
          Macan Ebrahimzade
        </span>
      </H1>
      <div className="w-full md:w-3/4">
        <P>
          We have some items that you can check out here, but if you want to see
          more, click{" "}
          <Link
            className="text-accent-700 hover:text-accent-300"
            href="/products"
          >
            here
          </Link>
        </P>

        <P>
          This project is a demo website to showcase Macan Ebrahimzade&apos;s
          knowledge of Next.js and React.js. If you want to gain more
          information about Macan, click{" "}
          <Link className="text-accent-700 hover:text-accent-300" href="/about">
            here
          </Link>
        </P>
      </div>
      <Suspense fallback={<Spinner />} key={curSort}>
        <CarouselWrapper curSort={curSort} />
      </Suspense>
    </>
  );
}

export default Page;
