import { getAllItems, getItem } from "@/lib/items";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { title } = await getItem(params.itemSlug);

  return { title };
}

// chon be khatere dynamic segment route ma dynamic shode ma mitooni
// ba estefade az function generateStaticParams() be static tabdilesh konim
export async function generateStaticParams() {
  const items = await getAllItems();

  const ids = items.map((item) => ({ itemId: String(item.id) }));

  return ids;
}

async function Page({ params }) {
  const itemId = params.itemSlug;
  const item = await getItem(itemId);

  const { type, title, image, id, city, price, presenter, runtime, rate, url } =
    item;

  return (
    <div className="md:grid md:grid-cols-2 md:items-center md:gap-20 md:border md:border-primary-800 md:px-8 md:py-3 mt-7  md:mb-24">
      <div className="aspect-video relative  lg:scale-[1.15] lg:-translate-x-3">
        <Image fill className="object-cover" src={image} alt={title} />
      </div>

      <div className="px-3 py-4 mb-5">
        <h3 className="text-nowrap text-accent-600 font-black text-xl sm:text-4xl  lg:text-6xl  lg:translate-x-[-254px] md:translate-x-[-150px] md:bg-primary-100 dark:md:bg-primary-950 md:p-6 md:pb-1 md:w-[150%]">
          {title}
        </h3>
      </div>

      <div className="mb-5 px-3 lg:text-2xl">
        <p className="dark:text-primary-400 text-nowrap">
          Price :{" "}
          <span className="dark:text-primary-200 text-accent-800 text-lg">
            {price}$
          </span>
        </p>

        <p className="dark:text-primary-400 text-nowrap">
          Rete :{" "}
          <span className="dark:text-primary-200 text-accent-800">{rate}</span>
        </p>

        <p className="dark:text-primary-400 text-nowrap">
          Runtime :{" "}
          <span className="dark:text-primary-200 text-accent-800">
            {runtime}
          </span>
        </p>

        <p className="dark:text-primary-400 text-nowrap">
          More Details :{" "}
          <a
            target="_blank"
            className="dark:text-primary-200 text-accent-800"
            href={url}
          >
            {url}
          </a>
        </p>
      </div>

      <div className="mb-5 px-3 lg:text-2xl">
        <p className="dark:text-primary-400 text-nowrap">
          Type :{" "}
          <span className="dark:text-primary-200 text-accent-800 text-lg">
            {type}
          </span>
        </p>
        <p className="dark:text-primary-400 text-nowrap">
          City :{" "}
          <span className="dark:text-primary-200 text-accent-800 text-lg">
            {city}
          </span>
        </p>
        <p className="dark:text-primary-400 text-nowrap">
          Presenter :{" "}
          <span className="dark:text-primary-200 text-accent-800">
            {presenter}
          </span>
        </p>
        <p className="dark:text-primary-400 text-nowrap">
          ID :{" "}
          <span className="dark:text-primary-200 text-accent-800">#{id}</span>
        </p>
      </div>
    </div>
  );
}

export default Page;
