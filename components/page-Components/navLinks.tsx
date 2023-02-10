"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import DarkMode from "./darkMode";
import ButtonPrimary from "../UI-Components/button-primary";
import IconButton from "../UI-Components/icon-button";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center mr-5 gap-3">
      {" "}
      <Link
        href="/"
        className={
          pathname === "/"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500"
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200"
        }
      >
        Home
      </Link>
      <Link
        href="/about-us"
        className={
          pathname === "/about-us"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500"
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200"
        }
      >
        About Us
      </Link>
      <Link
        href="/product"
        className={
          pathname === "/product"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500"
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200"
        }
      >
        Product
      </Link>
      <Link
        href="pricing"
        className={
          pathname === "/pricing"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500"
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200"
        }
      >
        Pricing
      </Link>
      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500"
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200"
        }
      >
        Blog
      </Link>
      {/* <DarkMode /> */}
      <IconButton
        className=""
        onClick={() => {
          window.location.href = "https://smart-plan.io";
        }}
      >
        <DarkMode />
      </IconButton>
      <ButtonPrimary
        onClick={() => {
          window.location.href = "https://smart-plan.io";
        }}
        className=""
      >
        Launch App <FiExternalLink size={20} className="ml-1" />
      </ButtonPrimary>
    </div>
  );
};

export default NavLinks;
