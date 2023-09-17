import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { LuLibrary } from "react-icons/lu";
import { HiPlusSmall } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "./Footer";
import playlist from "@/json/playlist.json";
import Library from "../sidebar/liabrarys/Library";
import logo from '@/public/assest/logo/main-logo.png'
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="w-full h-full flex flex-col gap-2 pb-100">
      {/* top section */}
      <div className="flex-[15%] flex flex-col items-start justify-center bg-secondary w-full h-full p-5 gap-5">
        <div
          className={`w-full flex justify-start items-center gap-4 cursor-pointer  hover:text-[#fff] ${
            router.pathname === "/" ? "text-[#fff]" : "text-[#ccc]"
          }`}
          onClick={() => router.push("/")}
        >
          {router.pathname === "/" ? (
            <AiTwotoneHome className={`text-[25px] text-[#fff]`} />
          ) : (
            <AiOutlineHome className={`text-[25px]`} />
          )}
          <article>Home</article>
        </div>
        <div
          className={`w-full flex justify-start items-center gap-4 cursor-pointer  hover:text-[#fff] ${
            router.pathname === "/search" ? "text-[#fff]" : "text-[#ccc]"
          }`}
          onClick={() => router.push("/search")}
        >
          <RiSearch2Line className={`text-[25px]`} />
          <article>Search</article>
        </div>
      </div>
      {/* bottom section */}
      <div className=" relative flex-[85%] bg-secondary w-full h-full overflow-hidden rounded-lg">
        {/* top div */}
        <div
          className={`w-full flex justify-between items-center gap-4 cursor-pointer bg-[#222] px-5 py-2`}
        >
          <div className="flex justify-start items-center  gap-4 text-[#ccc]  hover:text-[#fff]">
            <LuLibrary className={`text-[25px]`} />
            <article className="font-medium text-sm">Your Library</article>
          </div>
          <HiPlusSmall className="text-[25px] text-[#ccc] hover:text-[#fff]" />
        </div>
        {/* if playlist is empyt */}
        {playlist.length === 0 && (
          <div className="custom-scroll w-full h-[75%] overflow-y-scroll py-5 px-2 ">
            <div className="w-full p-5 bg-[#222] rounded-lg">
            <article className="text-[#fff] font-medium text-sm mb-2">
              Create Your First Playlist
            </article>
            <article className="text-[#ccc] font-normal text-xs mb-4">
              It's we will help you
            </article>
            {/* button */}
            <div className="py-2  px-4 bg-[#fff] rounded-full cursor-pointer inline-flex justify-center items-start hover:bg-green hover:text-[#fff]">
              <article className="text-xs">Create Playlist</article>
            </div>
          </div>
          </div>
        )}

        {/* playlist section and other */}
        {playlist.length > 0 && (
          <div className="custom-scroll w-full h-[75%] overflow-y-scroll py-5 px-2 ">
            {/* Seacrh  */}
            <div className="flex justify-center items-center  mb-5 gap-4 ">
              <div className="flex-[1] w-full p-2 bg-[#fff] bg-opacity-[0.1] rounded-md flex justify-center items-center gap-2">
                <RiSearch2Line className="text-[#ccc]" />{" "}
                <input
                  type="text"
                  placeholder="search..."
                  className="flex-[1] bg-transparent outline-none text-xs text-[#fff] font-normal"
                />
              </div>
              {/* recents */}
              <div className="flex justify-end items-center gap-2 cursor-pointer text-[#ccc] hover:text-[#fff]">
                <article className=" text-xs font-light">Recents</article>
                <IoMdArrowDropdown  className="mt-[2.5px]"/>
              </div>
            </div>
            {/* library */}
            <Library />
          </div>
        )}
      </div>

      {/* footer */}
      <div className="absolute bottom-0 left-0 w-full h-auto bg-[#fff] bg-opacity-[0.1] p-5">
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
