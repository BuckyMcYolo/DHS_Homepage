import Link from "next/link";
import React from "react";
import Burger from "./burger";
import NavLinks from "./navLinks";

const Nav = () => {
  return (
    <nav className="top-0 sticky w-full h-12 md:h-16 lg:h-20 bg-white mb-4 flex justify-between items-center text-black mt-3">
      <div className="flex items-center">
        <Link
          href="/"
          className=" font-bold text-base md:text-lg lg:text-2xl ml-2 md:ml-4 hover:text-blue-500"
        >
          Digital HealthCare Solutions
        </Link>
      </div>
      <Burger />
      <section>
        <NavLinks />
      </section>
    </nav>
  );
};

export default Nav;
