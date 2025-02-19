import Image from "next/image";

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
      <Image src={image} alt={`Cabin ${name}`} />
    </div>
  );
};

export default CabinCard;
