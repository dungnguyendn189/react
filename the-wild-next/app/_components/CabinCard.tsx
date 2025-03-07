import Image from "next/image";
import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type CabinType = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

const CabinCard: React.FC<{ cabin: CabinType }> = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <div className="flex border-primary-800 border">
      <div className=" relative flex-1">
        <Image
          src={image}
          className="object-cover"
          fill
          alt={`Cabin ${name}`}
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabinCard;

{
  /* <div className="border border-primary-800 rounded-lg overflow-hidden w-[300px]">
  <div className="relative w-full h-[200px]">
    <Image src={image} alt={`Cabin ${name}`} fill className="object-cover" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold">{name}</h3>
  </div>
</div>; */
}
