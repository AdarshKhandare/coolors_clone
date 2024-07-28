"use client";
import Settings from "@/components/Settings";
import { useRouter } from "next/navigation";
import randomColor from "randomcolor";
import React, { useEffect, useRef } from "react";
//  @ts-ignore

const Generator = () => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const generateRandonColor = randomColor({
    hue: "random",
    luminosity: "random",
    count: 5,
  });
  console.log(generateRandonColor);

  const routeParams = generateRandonColor
    .map((color: string) => color.slice(1))
    .join("-");

  const navigate = useRouter();

  useEffect(() => {
    setTimeout(() => {
      navigate.push(`/color/${routeParams}`);
    }, 3000);
  }, []);
  return (
    <div className="h-screen bg-white w-screen flex justify-center items-center">
      <div className="border-purple-300 h-14 w-14 animate-spin rounded-full border-2 border-t-purple-950" />
    </div>
  );
};

export default Generator;
