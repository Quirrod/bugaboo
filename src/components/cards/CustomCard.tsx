import { ReactNode } from "react";

type WhiteTransparentCardProps = {
  children: ReactNode;
  className?: string;
};

function CustomCard({ children, className }: WhiteTransparentCardProps) {
  return <div className={`rounded-2xl ${className}`}>{children}</div>;
}

export default CustomCard;
