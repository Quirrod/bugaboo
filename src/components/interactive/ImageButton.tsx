"use client";
import React from "react";

interface ImageButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function ImageButton({ children, icon }: ImageButtonProps) {
  return (
    <div className="flex gap-2 items-center w-full justify-center">
      <div className="w-6 h-6 bg-secondary rounded-full text-black group-hover:bg-primary content-center flex items-center justify-center">
        {icon}
      </div>
      <span>{children}</span>
    </div>
  );
}

export default ImageButton;
