import { SquareCursor, User } from "iconoir-react";
import CustomButton from "../interactive/CustomButton";
import ImageButton from "../interactive/ImageButton";
import { Links } from "./Links";
import { navBarAuth, navBarNoAuth } from "@/data/data";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
    const { auth } = useAuth();
    const isAuth = auth.token && auth.userId ? true : false;
    const links = isAuth ? navBarAuth : navBarNoAuth;

    return (
        <nav className="bg-dark w-full py-10 sm:px-72 backdrop-blur-md flex items-center justify-center xl:justify-between">
            <div className="hidden xl:block">
                <Links linksList={links} isRow />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 items-center">
                <Link href={isAuth ? "/share-code" : "/login"}>
                    <CustomButton theme={"secondary"}>
                        {isAuth ? "Share Code" : "Login"}
                    </CustomButton>
                </Link>
                <Link href={isAuth ? "/profile" : "/sign-up"}>
                    <CustomButton theme="imageButton">
                        <ImageButton
                            icon={isAuth ? <User /> : <SquareCursor />}
                        >
                            <span className="whitespace-nowrap">
                                {isAuth ? auth.username : "Sign Up"}
                            </span>
                        </ImageButton>
                    </CustomButton>
                </Link>
            </div>
        </nav>
    );
}
