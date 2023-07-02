import { ReactNode } from "react";

type WhiteTransparentCardProps = {
  children: ReactNode;
  className?: string;
};

function WhiteTransparentCard({
  children,
  className,
}: WhiteTransparentCardProps) {
  return (
    <div className={`rounded-2xl bg-white/80 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

export default WhiteTransparentCard;
