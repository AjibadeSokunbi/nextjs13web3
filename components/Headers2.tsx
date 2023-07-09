import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import Connects from "@/components/connects";
import Toggle from "./Toggle";
import useScreenSize from "@/utils/useScreenSize";
interface Props {}

const Headers2 = () => {

  return (
    <div className="-z-50 fixed w-full py-1 bg-gray-950 border border-gray-900  text-white-900 font-semibold flex justify-end">
      <div className="w-[93%]">
        <div className="flex justify-between py-2 items-center">
          <div className="flex flex-row gap-1">
            <div className="text-white hover:underline hover:underline-offset-4 text-[16px] font-normal">
              Super Users{" "}
            </div>
            <div>🔥</div>
          </div>

          <div className="flex gap-6 text-align items-center mr-8 text-2xl">
            <AiOutlineBell />
            <Toggle />
            <Connects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers2;
