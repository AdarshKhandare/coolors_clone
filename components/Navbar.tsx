import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="min-w-screen  bg-purple-200 px-6 py-2">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex flex-row items-center ">
          <SignedOut >
            <SignInButton />
          </SignedOut>
          <SignedIn  >
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
