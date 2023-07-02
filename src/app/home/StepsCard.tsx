import CustomCard from "@/components/cards/CustomCard";
import React from "react";

interface StepsCardProps {
  number?: number;
  text?: string;
  title?: string;
  NumberClass?: string;
}
export const StepsCard: React.FC<StepsCardProps> = ({
  number,
  text,
  NumberClass = "bg-primary text-dark ",
  title,
}) => {
  return (
    <CustomCard className="flex flex-col xl:flex-row items-start text-dark xl:px-10 min-w-[10em]">
      <h1
        className={`rounded-full ${NumberClass} text-center self-center w-12 h-12 flex items-center justify-center text-xl font-cabin`}
      >
        {number}
      </h1>
      <div className="flex flex-col gap-2 ml-5">
        <h1 className="text-start text-2xl font-bold font-cabin items-center self-start flex gap-2">
          {title}
        </h1>
        <p className="text-start text-base text-secondaryDark">{text}</p>
      </div>
    </CustomCard>
  );
};
