"use client";

import { Button } from "../ui/button";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { NavbarItems } from "../utility/constants";
import Typography from "../utility/typography";
import { GiCupcake } from "react-icons/gi";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for button
  const handleClickOutside = (event: Event) => {
    // Ensure the type is valid, and check if the click is outside the ref element
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className="fixed top-0 z-50 flex w-full  bg-background/90 shadow-lg backdrop-blur-sm">
      <nav className="max-w-screen-xl mx-auto w-full  flex items-center justify-between gap-4 p-4 ">
        <div
          className="flex items-center gap-4 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text hover:cursor-pointer"
          onClick={() => scrollToTop()}
        >
          {/* <Image src={logo.img} alt={logo.alt} width={80} height={80} /> */}
          <GiCupcake size={60} className="text-primary" />
          <h1 className="text-primary text-4xl font-bold">Slatki san</h1>
        </div>
        <div ref={buttonRef}>
          <IoMdMenu
            size={50}
            className="text-primary hover:text-secondary hover:cursor-pointer block lg:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`absolute lg:hidden md:rounded-sm w-full md:w-fit md:px-8 md:py-6 shadow-lg bottom-0 translate-y-full py-4 z-40 left-0 md:left-auto md:right-0 backdrop-blur-lg bg-gradient-to-r from-primary/95 to-secondary/95 items-center justify-center gap-4 transition-opacity duration-700 ease-in-out transform ${
            showMenu ? "opacity-100 flex" : "hidden opacity-0"
          }`}
          ref={ref}
        >
          <ul className="flex flex-col gap-4 text-white items-center w-full">
            {NavbarItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-md font-medium text-white hover:text-accent-foreground ${
                    index === NavbarItems.length - 1
                      ? "text-lg font-extrabold bg-slate-400/60 w-full p-2 rounded-md"
                      : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className=" items-center gap-4 hidden lg:flex">
          {NavbarItems.map((item, index) => (
            <a key={item.title} href={item.href}>
              <Button
                variant={`${
                  index === NavbarItems.length - 1 ? "default" : "link"
                }`}
                className={`${
                  index === NavbarItems.length - 1
                    ? "text-white text-xl bg-accent hover:bg-slate-400/60"
                    : "text-lg font-medium text-primary hover:text-slate-500"
                } cursor-pointer`}
              >
                {item.title}
              </Button>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
