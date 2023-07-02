import Badge from "@/components/badge/Badge";
import React from "react";
import { StepsCard } from "./StepsCard";

export const Steps = () => {
  return (
    <div className="lg:px-96 py-40 text-center flex flex-col gap-10 bg-white">
      <Badge id="steps" theme="secondary">
        Services
      </Badge>
      <h1 className="text-xl sm:text-4xl font-bold font-cabin">
        There have some easy steps to join!
      </h1>
      <p className="sm:text-start text-base text-secondaryDark">
        Become a Bugaboo Member: Join a Thriving Community of Developers and
        Amplify Your Coding Journey, unleash Your Coding Potential and Connect
        with a Vibrant Developer Community
      </p>
      <hr className="border-px border-secondaryDark"></hr>
      <StepsCard
        number={1}
        title="Setup Account"
        text="Click on the 'Sign Up' or 'Join' button. Fill out the required information."
      />
      <hr className="border-px border-secondaryDark"></hr>
      <StepsCard
        NumberClass="bg-secondary text-light"
        number={2}
        title="Start Sharing Your Code"
        text="Use the submission form or designated section to share your work with others."
      />
      <hr className="border-px border-secondaryDark"></hr>
      <StepsCard
        NumberClass="bg-dark text-light"
        number={3}
        title="Engage In Discussions"
        text="Comment on and provide feedback for code snippets shared by other developers."
      />
    </div>
  );
};
