import { FacebookTag, Instagram, LinkedIn, Twitter } from "iconoir-react";
import React from "react";

export const SocialIcons = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li>
        <Instagram className="h-8 w-8 text-white" />
      </li>
      <li>
        <FacebookTag className="h-8 w-8 text-white" />
      </li>
      <li>
        <Twitter className="h-8 w-8 text-white" />
      </li>
      <li>
        <LinkedIn className="h-8 w-8 text-white" />
      </li>
    </ul>
  );
};
