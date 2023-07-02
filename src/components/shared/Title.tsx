import useAuth from "@/hooks/useAuth";
import { ChatLines } from "iconoir-react";
import Link from "next/link";
import React from "react";

export const Title = () => {
  const { auth, setAuth } = useAuth();
  return (
    <Link
      className="flex-shrink-0 flex gap-2"
      href={auth.token ? "/shared-codes" : "/"}
    >
      <ChatLines className="text-xl text-primary" />
      <span className="text-xl text-primary font-bold font-cabin">Bugaboo</span>
    </Link>
  );
};
