import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from "next/router";
import { useMaximizeScreen } from "@/store_management/player_manager";

const Header = ({ isSticky }) => {
  const router = useRouter();
  const pathWithBlack = ["/artist"];
  const screenFull =  useMaximizeScreen((state) => state.screenFull)

  return (
    <>
      <div
        className={`${ screenFull ? 'fixed' : isSticky ? 'sticky' : 'absolute'} top-0 left-0 w-full p-4 flex justify-between items-center ${pathWithBlack.includes(router.pathname) !== -1 && isSticky && '!filter !backdrop-blur-lg'}`}
        style={{
          backdropFilter: `${isSticky && pathWithBlack.includes(router.pathname) === -1 ? 'blur(20px)' : 'blur(0px)'}`,
          zIndex: 999
        }}
      >
        {/* left section */}
        <div className="flex justify-start items-center">
          {/* history manipulation */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-8 h-8 bg-black hover:bg-green rounded-full flex justify-center items-center cursor-pointer sm:flex" onClick={() => window.history.back()}>
              <GoChevronLeft className="text-[#fff]" />
            </div>
            <div className="w-8 h-8 bg-black hover:bg-green rounded-full flex justify-center items-center cursor-pointer sm:flex" onClick={() => window.history.forward()}>
              <GoChevronRight className="text-[#fff]" />
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="flex justify-end items-center gap-5">
          {/* search */}
          <div className="h-10 w-[300px] bg-[#111] rounded-full px-5 hidden sm:block">
            <input type="text" placeholder="Search Music" className="w-full h-full rounded-full bg-transparent outline-none text-[#fff] placeholder:text-xs text-xs" />
          </div>
          {/* user */}
          <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <AiOutlineUser className="text-[#fff]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
