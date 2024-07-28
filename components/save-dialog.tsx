"use client";
import * as React from "react";
//  @ts-ignore
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SavePalettes from "@/components/save-palettes-form";

import { Heart, X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

export function SaveDialog({ colors }: { colors: string[] }) {
  const [open, setOpen] = React.useState<any>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="" asChild>
          <Button
            className="border border-purple-500 rounded-lg hover:bg-purple-400 hover:text-white"
            variant="outline">
            <Heart className="mr-2" />
            Save
          </Button>
        </DialogTrigger>
        <DialogContent
          onKeyDown={(event: any) => {
            event.stopPropagation();
          }}
          className="sm:max-w-[425px] pointer-events-none  p-5">
          <DialogHeader className="px-2 py-2">
            <DialogTitle className="text-center">Save Palette</DialogTitle>
            <DialogClose
              asChild
              className="absolute top-5 left-5 cursor-pointer ">
              <X width={20} />
            </DialogClose>
          </DialogHeader>
          {/* two differnt comp */}

          <SavePalettes colors={colors} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="border-none" variant="outline">
          <Heart className="mr-2" />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        onKeyDown={(event: any) => {
          event.stopPropagation();
        }}
        className="sm:max-w-[425px] p-2">
        <DrawerHeader className="">
          <DialogTitle className="text-left">Save Palette</DialogTitle>
        </DrawerHeader>

        <SavePalettes colors={colors} />
      </DrawerContent>
    </Drawer>
  );
}
