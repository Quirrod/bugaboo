import { ReactNode } from "react";

const badgeConfig = {
  primary: {
    bgColor: "bg-primary",
    textColor: "text-dark",
    width: "w-min",
  },
  secondary: {
    bgColor: "bg-secondary",
    textColor: "text-dark",
    width: "w-min",
  },
};

type ButtonProps = {
  theme?: keyof typeof badgeConfig;
  children: ReactNode;
  id?: string;
};

function Badge({ theme = "primary", children, id }: ButtonProps) {
  return (
    <div id={id}>
      <span
        className={`${badgeConfig[theme]?.bgColor} 
      ${badgeConfig[theme]?.textColor}  text-base py-2 px-3 rounded-3xl uppercase`}
      >
        {children}
      </span>
    </div>
  );
}

export default Badge;
