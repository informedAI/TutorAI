"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const NavButton = ({
  children,
  pathname,
}: {
  children: string;
  pathname: string;
}) => {
  return (
    <Button
      className={`bg-background border border-black text-black font-londrinaShadow text-3xl h-10 w-36 rounded-xl ${
        pathname == children.toLowerCase().replace(" ", "")
          ? "bg-[#889cff]"
          : ""
      }`}
    >
      {children}
    </Button>
  );
};

const NavBar = () => {
  let site = usePathname().replace("/", "");
  site = site == "" ? "about" : site;

  return (
    <nav className="hidden lg:block w-fit min-h-screen h-full bg-[#eeeeee]">
      <h1 className="font-londrinaShadow text-6xl text-center my-8">TutorAi</h1>
      <ul className="flex flex-col gap-5 mx-12 drop-shadow-md">
        {["About", "Flashcards", "Notes", "Study plan", "Help", "Account"].map(
          (item, index) => (
            <li key={index}>
              <Link
                href={`/${
                  item != "About" ? item.toLowerCase().replace(" ", "") : ""
                }`}
              >
                <NavButton pathname={site}>{item}</NavButton>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
