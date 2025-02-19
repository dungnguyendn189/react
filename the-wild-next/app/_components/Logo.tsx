import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import logo from "@/public/icon.png";

const Logo: FC = () => {
  return (
    <div className="z-10">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={logo}
          height="60"
          width="60"
          alt="The Wild Oasis logo"
          quality={100}
        />
        <span className="text-xl font-semibold text-primary-100">
          Pô Na Hotel
        </span>
      </Link>
    </div>
  );
};

export default Logo;
