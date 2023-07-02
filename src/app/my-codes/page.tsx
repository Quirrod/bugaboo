"use client";

import Badge from "@/components/badge/Badge";
import { Hero } from "./Hero";
import { CodeCard } from "@/components/cards/CodeCard";
import React, { useEffect } from "react";
import { codeService } from "@/services/codeServices";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../loader/Loader";
import { userService } from "@/services/userServices";
import useAuth from "@/hooks/useAuth";

function page() {
  const { auth, setAuth } = useAuth();

  const { data, isSuccess, isFetching, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: () => userService.getUser(auth.userId, auth.token),
    keepPreviousData: true,
  });

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="px-4 lg:px-72 py-40 flex flex-col gap-16">
        <div className="flex flex-col gap-4 grow">
          <Badge theme="secondary" id="codes">
            my CODES
          </Badge>
        </div>
        <div className="grid auto-rows-auto grid-cols-auto-fill-20 sm:gap-20">
          {isSuccess &&
            data.codes.map((code, index) => (
              <CodeCard code={code} idUser={code?.id!} key={index} />
            ))}
        </div>
      </div>
      {isLoading && <Loader />}
    </main>
  );
}

export default page;
