import Image from "next/image";
import React from "react";

const FamousGroups = ({ Groups }) => {
  return (
    <div className="w-full grid sm:grid-cols-5 grid-cols-2 gap-5">
      {Groups.map((group, idx) => {
        return (
          <div key={idx} className="relative w-full h-[160px] bg-black rounded-lg overflow-hidden  cursor-pointer shadow-2xl">
            {/* image */}
            <div className="relative w-full h-[75%] bg-white">
            <Image src={group.assets.banner} alt={`${group.group_name} poster`} width={500} height={500} className="relative w-full h-full object-cover filter brightness-[0.9] z-0" />
            </div>
            {/* div */}
            <div className="relative w-full  h-[25%] z-10 bg-[#ffffff] flex justify-center items-center px-2">
                <article className="font-extrabold text-center text-xs leading-2"><span className="text-[10px] font-bold">THIS IS</span> {group.group_name}</article>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FamousGroups;
