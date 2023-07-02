import React from "react";
import CustomButton from "../interactive/CustomButton";
import Image from "next/image";
import codeImage from "@/assets/images/cuteBoo3.jpg";
import { Code } from "@/models/code";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

interface CodeCardProps {
  code: Code;
  idUser: number;
}

export const CodeCard: React.FC<CodeCardProps> = ({ code, idUser }) => {
  const { auth } = useAuth();
  const pubDate = new Date(code.createdAt);
  return (
    <div className="w-full flex flex-col gap-4">
      {/* <Image
        src={codeImage}
        alt="Hero Image"
        className="object-cover object-center w-full h-48 rounded-lg"
      /> */}
      <h1 className="text-start text-lg sm:text-2xl font-bold font-cabin">
        {code.title}
      </h1>
      <p className="text-start text-sm md:text-base line-clamp-4 text-secondaryDark">
        {code.description}
      </p>
      <hr className="border-px border-secondaryDark"></hr>
      <div className="flex flex-row sm:gap-4 items-center justify-around sm:justify-between">
        <Image
          src={codeImage}
          alt="Hero Image"
          className="hidden sm:block object-cover object-center w-16 h-16 rounded-full"
        />
        <div className="hidden sm:block w-px h-6 bg-secondaryDark"></div>

        <span className="text-start text-sm font-cabin">
          {code?.users_permissions_user?.data?.attributes?.username ?? auth.username}
        </span>
        <time className="hidden sm:block text-start text-sm font-cabin">
          {pubDate.toLocaleString()}
        </time>
        <div>
          <Link href={"code/" + idUser}>
            <CustomButton theme="primary">Comment</CustomButton>
          </Link>
        </div>
      </div>
      <hr className="border-px border-secondaryDark"></hr>
    </div>
  );
};
