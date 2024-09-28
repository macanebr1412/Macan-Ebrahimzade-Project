import SortingButton from "./SortingButton";

function SortingItems({ handleShuffel }) {
  return (
    <div className=" flex text-xs md:text-sm lg:text-xl  w-full justify-between mb-4 pe-5 ">
      <SortingButton sort="random" handleShuffel={handleShuffel} />
      <SortingButton sort="default" handleShuffel={handleShuffel} />
    </div>
  );
}

export default SortingItems;
