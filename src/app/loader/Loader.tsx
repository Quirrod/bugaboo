import React from "react";
import { GridLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
      <GridLoader color="#A6EDA6" size={20} />
    </div>
  );
};
