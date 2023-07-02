import Badge from "@/components/badge/Badge";
import { CodeCard } from "@/components/cards/CodeCard";
import CustomButton from "@/components/interactive/CustomButton";
import React from "react";

export const Codes = () => {
  return (
    <div className="lg:px-72 py-40 text-center flex flex-col gap-10 bg-light">
      <Badge id="codes" theme="secondary">CoDes</Badge>
      <div className="inline-flex xl:gap-96 justify-between">
        <h1 className="text-start text-xl sm:text-4xl font-bold font-cabin flex-1">
          Take a look at some codes who need you!
        </h1>
        <div className="">
          <CustomButton theme="secondary">More Codes</CustomButton>
        </div>
      </div>

      <div className="grid auto-rows-auto grid-cols-auto-fill-20 sm:gap-20">
        <CodeCard />
        <CodeCard />
      </div>
    </div>
  );
};
