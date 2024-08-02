import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" lg:absolute w-full h-[3.5rem] bg-purple-100 z-10 border-b border-purple-400">
      <div className="flex flex-row justify-center items-center mt-2">
        <Link href="/">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Coolors
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
