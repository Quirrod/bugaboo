"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { auth } = useAuth();

    if (auth.token === "") {
        return <Redirect />;
    } else {
        return children;
    }
};

export default RequireAuth;

function Redirect() {
    const router = useRouter();
    useEffect(() => {
        router.push("/login");
    }, []);
    return (
        <div className="h-[500px] grid place-items-center">Unauthorized 😢</div>
    );
}
