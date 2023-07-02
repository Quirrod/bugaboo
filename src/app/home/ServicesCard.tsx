import CustomCard from "@/components/cards/CustomCard";
import React from "react";

interface ServicesCardProps {
  children?: React.ReactNode;
  text?: string;
  title?: string;
  theme?: "primary" | "secondary";
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
  children,
  text,
  theme = "primary",
  title,
}) => {
  const serviceCardConfig = {
    primary: {
      bgColor: "bg-light",
      textColor: "text-dark",
      textDescriptionColor: "text-secondaryDark",
    },
    secondary: {
      bgColor: "bg-dark",
      textColor: "text-white",
      textDescriptionColor: "text-light",
    },
  };
  return (
    <CustomCard
      className={`text-start items-start p-7 ${serviceCardConfig[theme]?.bgColor} ${serviceCardConfig[theme]?.textColor}`}
    >
      {children}
      <h1
        className={`text-2xl font-bold font-cabin items-center self-start flex gap-2`}
      >
        {title}
      </h1>
      <p className={`text-sm ${serviceCardConfig[theme].textDescriptionColor}`}>
        {text}
      </p>
    </CustomCard>
  );
};
