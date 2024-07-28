import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4  lg:absolute w-full h-[3rem] bg-purple-200 z-10 border-b border-purple-400">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex flex-row items-center ">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
