// import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { Cabin } from "@/app/cabins/cabinType";

interface CabinListProps {
  filter?: string;
}

const CabinList: React.FC<CabinListProps> = async ({
  filter,
}: CabinListProps) => {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins: Cabin[] = [];

  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((c) => c.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (c) => c.maxCapacity >= 4 && c.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((c) => c.maxCapacity >= 8);

  // noStore()
  return (
    <>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 ">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default CabinList;
