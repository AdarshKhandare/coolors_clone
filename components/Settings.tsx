import React from "react";
import { ButtonWithIcon } from "./ui/button";
import { Eye, Heart, Menu, Share2 } from "lucide-react";
import { Separator } from "./ui/separator";

const Settings = () => {
  return (
    <section className="w-full px-6 py-2 contain-content grid grid-cols-12 gap-2 justify-between items-center ">
      <div className="w-full col-span-4 ">
        <span className="text-sm text-gray-500 text-start">
          Press the spacebar to generate colors palette!
        </span>
      </div>
      <div className="w-full col-span-4 "></div>
      <div className=" w-full h-full col-span-4 flex flex-row justify-between items-center  border border-purple-300 rounded-lg bg-purple-200 ">
        <ButtonWithIcon
          title="View"
          className=" flex gap-2 hover:bg-purple-400 w-36"
          icon={<Eye size={16} />}
        />
        <Separator orientation="vertical" className="bg-purple-400" />
        <ButtonWithIcon
          title="Export"
          className="w-36 gap-2 hover:bg-purple-400"
          icon={<Share2 size={16} />}
        />
        <Separator orientation="vertical" className="bg-purple-400" />

        <ButtonWithIcon
          title="Save"
          className="w-36 gap-2 hover:bg-purple-400"
          icon={<Heart size={16} />}
        />
        <Separator orientation="vertical" className="bg-purple-400" />
        <div className="w-36 h-full flex justify-center items-center cursor-pointer rounded-lg hover:bg-purple-400">
          <Menu className="w-full h-5 " />
        </div>
      </div>
    </section>
  );
};

export default Settings;
