import Badge from "@/components/badge/Badge";
import {
  ShareAndroid,
  QuoteMessage,
  Community,
  UserCrown,
  Code,
  ThreeStars,
} from "iconoir-react";
import React from "react";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <div className="lg:px-72 py-40 text-center flex flex-col gap-10 bg-light">
      <Badge id="services" theme="secondary">
        Services
      </Badge>
      <h1 className="text-xl sm:text-4xl font-bold font-cabin">Our Services</h1>
      <div className="grid auto-rows-auto grid-cols-auto-fill-15 gap-2">
        <ServicesCard
          title="Code Sharing"
          text="Users can submit their code, whether it's a specific function, algorithm, or even an entire project."
        >
          <ShareAndroid width={40} height={40} className="text-primary " />
        </ServicesCard>
        <ServicesCard
          theme="secondary"
          title="Commenting System"
          text="Enables users to provide feedback, suggestions, or ask questions about the shared code."
        >
          <QuoteMessage width={40} height={40} className="text-primary " />
        </ServicesCard>
        <ServicesCard
          title="Code Quality Assessment"
          text="Users can rate the quality of the code they find"
        >
          <Community width={40} height={40} className="text-primary " />
        </ServicesCard>
        <ServicesCard
          title="Learning Opportunities"
          text="Users can interact with each other, share their experiences, and exchange ideas, fostering a sense of community."
        >
          <UserCrown width={40} height={40} className="text-primary " />
        </ServicesCard>
        <ServicesCard
          title="Code Discoverability"
          text="By sharing code and engaging with the community, developers using Bugaboo can enhance their learning journey. "
        >
          <Code width={40} height={40} className="text-primary " />
        </ServicesCard>
        <ServicesCard
          title="Reputation Building"
          text="Users can earn reputation points based on the quality of their code submissions, comments, and suggestions."
        >
          <ThreeStars width={40} height={40} className="text-primary " />
        </ServicesCard>
      </div>
    </div>
  );
};
