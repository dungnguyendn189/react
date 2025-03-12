import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Metadata } from "next";



type Props = {
  params: Promise<{ cabinId: string }>;
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Giải quyết Promise
  const cabinName = await getCabin(parseInt(resolvedParams.cabinId))

  return {
    title: `Cabin: ${cabinName}`,

  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map(cabin => ({ cabinId: String(cabin.id) }));
  return ids;
}


const Page: React.FC<Props> = async ({ params }:Props) => {
  const paramsGets =  await params;
  const cabin = await getCabin(parseInt(paramsGets.cabinId));


  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image src={image} fill objectFit="cover" alt={`Cabin ${name}`} />
        </div>

        <div>
          <h3 className=" text-accent-100 font-black text-7xl mb-5 translate-x-[-254px]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center ">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="">{maxCapacity}</span> guests
              </span>
            </li>
            <li className="flex gap-3 text-primary-600">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the <span className="">Dolomites</span>{" "}
                (Italy)
              </span>
            </li>
            <li className="flex gap-3 text-primary-600">
              <EyeSlashIcon className="h-3 w-3 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
};

export default Page;


