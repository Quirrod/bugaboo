import { Title } from "./Title";
import { SocialIcons } from "./SocialIcons";

export default function Topbar() {
  return (
    <nav className="bg-dark w-full py-4 sm:px-72 backdrop-blur-md flex items-center justify-center lg:justify-between">
      <Title />
      <div className="hidden lg:block">
        <SocialIcons />
      </div>
    </nav>
  );
}
