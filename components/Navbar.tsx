import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="min-w-screen  bg-purple-200 px-6 py-2">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Image src="/vercel.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex flex-row items-center">
          <Button
            variant="outline"
            size={"sm"}
            className="bg-purple-500 text-white hover:bg-purple-300">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
