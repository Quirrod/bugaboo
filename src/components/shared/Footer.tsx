import { navBarAuth, navBarNoAuth } from "@/data/data";
import { Links } from "./Links";
import { SocialIcons } from "./SocialIcons";
import { Title } from "./Title";
import CustomButton from "../interactive/CustomButton";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Footer() {
  const { auth } = useAuth();
  const isAuth = auth.token && auth.userId ? true : false;
  const links = isAuth ? navBarAuth : navBarNoAuth;
  return (
    <footer className="bg-dark py-10 lg:px-72 w-full backdrop-blur-md">
      <div className="flex items-center justify-center lg:justify-between gap-3">
        <div className="flex items-start self-start h-full gap-44">
          <div className="h-full flex flex-col items-center lg:items-start gap-8">
            <Title />
            <SocialIcons />
          </div>
          <div className="hidden lg:block w-px h-64 bg-secondaryDark"></div>
        </div>
        <div className="hidden h-full items-start gap-24 justify-end lg:flex">
          <Links linksList={links} isRow={false} />
          <div className="flex flex-col items-center justify-center gap-4 self-center">
            <CustomButton theme="secondary">Join Us</CustomButton>
          </div>
        </div>
      </div>
      <hr className="h-px mt-8 bg-secondaryDark border-0"></hr>
      <div className="text-white text-sm font-medium text-center leading-loose">
        © 2023 Bugaboo. Made with ❤️ by{" "}
        <Link
          className="text-primary"
          href="
        https://www.linkedin.com/in/vanessa-tejerina/"
          target="_blank"
        >
          dark314
        </Link>
        ,{" "}
        <Link
          className="text-primary"
          href="https://www.linkedin.com/in/joel-jarro/"
          target="_blank"
        >
          Quirrod
        </Link>
      </div>
    </footer>
  );
}
