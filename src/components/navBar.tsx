"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";

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
        pathname === children.toLowerCase().replace(" ", "")
          ? "bg-[#889cff]"
          : ""
      }`}
    >
      {children}
    </Button>
  );
};

const NavBar = () => {
  const pathname = usePathname();
  const site = pathname.replace("/", "") || "about";

  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close nav when clicking outside both nav and toggle button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navOpen &&
        navRef.current &&
        toggleRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navOpen]);

  // Toggle button click handler
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        ref={toggleRef}
        className={`lg:hidden fixed top-0 left-0 m-3 p-2 bg-[#4f46e5] text-[#eeeeee] rounded-md hover:bg-opacity-60 z-50 transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-[15rem]" : "translate-x-0"
        } lg:translate-x-0`}
        onClick={handleToggle}
      >
        {navOpen ? (
          <RiMenuUnfold2Line className="size-7" />
        ) : (
          <RiMenuFold2Line className="size-7" />
        )}
      </button>
      <nav
        ref={navRef}
        className={`fixed lg:static top-0 left-0 w-fit min-h-screen h-full bg-[#eeeeee] transform transition-transform duration-300 ease-in-out z-40 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h1 className="font-londrinaShadow text-6xl text-center my-8">
          TutorAi
        </h1>
        <ul className="flex flex-col gap-5 mx-12 drop-shadow-md">
          {[
            "About",
            "Flashcards",
            "Notes",
            "Study plan",
            "Help",
            "Account",
          ].map((item, index) => (
            <li key={index} onClick={() => setNavOpen(false)}>
              <Link
                href={`/${
                  item !== "About" ? item.toLowerCase().replace(" ", "") : ""
                }`}
              >
                <NavButton pathname={site}>{item}</NavButton>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
