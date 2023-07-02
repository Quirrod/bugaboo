import WhiteTransparentCard from "@/components/cards/WhiteTransparentCard";
import CustomButton from "@/components/interactive/CustomButton";
import ImageButton from "@/components/interactive/ImageButton";
import { ArrowRightCircle } from "iconoir-react";
import Image from "next/image";
import heroImage from "@/assets/images/cuteBoo4.jpg";
import Badge from "@/components/badge/Badge";

export const Hero = () => {
  return (
    <div className="h-80 relative">
      <Image
        src={heroImage}
        alt="Hero Image"
        className="object-cover object-center w-full h-full"
      />
      <WhiteTransparentCard
        className="absolute mx-auto sm:mx-0 left-0 right-0 bottom-0 
      sm:bottom-20 sm:left-32 max-h-[34em] w-full sm:w-96 p-3 sm:p-14 flex flex-col gap-3"
      >
        <Badge>CODES</Badge>
        <h1 className="text-xl sm:text-3xl font-bold text-dark font-cabin">
          Shared codes{" "}
        </h1>
      </WhiteTransparentCard>
    </div>
  );
};
