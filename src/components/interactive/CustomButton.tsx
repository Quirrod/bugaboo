"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const buttonConfig = {
  primary: {
    bgColor: "bg-dark",
    textColor: "text-white",
    bgColorHover: "hover:bg-white",
    textColorHover: "hover:text-dark",
    border: "border-2 border-dark",
    borderHover: "hover:border-2 hover:border-dark",
    width: "w-full min-w-[7em]",
  },
  secondary: {
    bgColor: "bg-primary",
    textColor: "text-dark",
    bgColorHover: "hover:bg-dark",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-white",
    border: "border-2 border-primary",
    width: "w-full min-w-[7em]",
  },
  imageButton: {
    bgColor: "bg-light",
    textColor: "text-dark",
    bgColorHover: "group hover:bg-dark ho",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-white",
    border: "border-2 border-dark",
    width: "w-full min-w-[7em]",
  },
};

type ButtonProps = {
  onClick?: () => void;
  theme?: keyof typeof buttonConfig;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
};

function CustomButton({
  onClick,
  theme = "primary",
  children,
  type = "submit",
  disable = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`${buttonConfig[theme]?.bgColor} 
      ${buttonConfig[theme]?.textColor} ${
        !disable && buttonConfig[theme]?.bgColorHover
      } 
      ${!disable && buttonConfig[theme]?.textColorHover} ${
        buttonConfig[theme]?.borderHover
      } 
      ${buttonConfig[theme]?.border} py-2 px-3 rounded-3xl ${
        buttonConfig[theme]?.width
      }`}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
