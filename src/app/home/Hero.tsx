import Image from "next/image";
import heroImage from "@/assets/images/cuteBoo1.jpg";
import WhiteTransparentCard from "@/components/cards/WhiteTransparentCard";
import CustomButton from "@/components/interactive/CustomButton";
import ImageButton from "@/components/interactive/ImageButton";
import { ArrowRightCircle } from "iconoir-react";

export const Hero = () => {
  return (
    <div id="home" className="h-[34em] relative">
      <Image
        src={heroImage}
        alt="Hero Image"
        className="object-cover object-center w-full h-full"
      />
      <WhiteTransparentCard
        className="absolute mx-auto sm:mx-0 left-0 right-0 bottom-0 
        sm:bottom-20 sm:left-32 max-h-[34em] w-full sm:w-96 p-3 sm:p-14 flex flex-col gap-3"
      >
        <h1 className="text-xl sm:text-3xl font-bold text-dark font-cabin">
          Boo to your bugs
        </h1>
        <p className="text-xs sm:text-sm text-secondaryDark">
          Bugaboo is a dynamic and innovative web application designed to
          revolutionize the way developers collaborate, share code, and receive
          valuable feedback.
        </p>
        <div className="flex flex-col sm:flex-row justify-around gap-4">
          <CustomButton theme="primary">Log In</CustomButton>
          <CustomButton theme="imageButton">
            <ImageButton icon={<ArrowRightCircle />}>
              Comment Codes!
            </ImageButton>
          </CustomButton>
        </div>
      </WhiteTransparentCard>
    </div>
  );
};
