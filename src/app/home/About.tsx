import React from "react";
import { FaceId, Star } from "iconoir-react";
import CustomCard from "@/components/cards/CustomCard";
import aboutImage from "@/assets/images/cuteBoo4.jpg";
import Image from "next/image";
import Badge from "@/components/badge/Badge";

export const About = () => {
  return (
    <div className="px-4 lg:px-72 py-40 flex gap-16">
      <div className="flex flex-col gap-4 grow">
        <Badge id="about">About US</Badge>
        <h1 className="text-4xl font-bold font-cabin">
          About our Boos to the bugs
        </h1>
        <p className="text-lg font-bold">
          Our mission is to create a platform to developers share, and learn
          from each other
        </p>
        <p className="text-base text-secondaryDark">
          Get help from other developers, and help others by sharing your
          knowledge
        </p>
        <hr className="border-px border-secondaryDark"></hr>
        <div className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-10">
          <CustomCard className="bg-light items-start text-dark p-5 min-w-[10em]">
            <h1 className="text-2xl font-bold font-cabin items-center self-start flex gap-2">
              <Star className="text-primary fill-primary" />
              400+
            </h1>
            <p className="text-base text-secondaryDark">Codes Shared</p>
          </CustomCard>
          <CustomCard className="bg-light items-start text-dark p-5 min-w-[10em]">
            <h1 className="text-2xl font-bold font-cabin items-center self-start flex gap-2">
              <FaceId className="text-secondary fill-secondary" />
              100+
            </h1>
            <p className="text-base text-secondaryDark">Happy Devs</p>
          </CustomCard>
        </div>
        <hr className="border-px border-secondaryDark"></hr>
      </div>
      <div className="hidden sm:flex gap-4 justify-end items-start grow-0">
        <Image
          src={aboutImage}
          alt="About Image"
          className="object-cover object-center w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
};
