import Image from "next/image";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const MusicVideo_Rows = ({ music }) => {
  return (
    <div className={`w-full cursor-pointer flex justify-between items-center mb-5`}>
      {/* thumbnail */}
      <div className="relative w-[160px] h-[100px] bg-[#000] rounded-xl overflow-hidden mr-2">
        <Image
          src={music?.poster?.thumbnail}
          alt="music video thumbnail"
          width={500}
          height={500}
          className="relative w-full h-full object-cover filter brightness-[0.8]"
        />
      </div>
      {/* information */}
      <div className="w-full flex justify-start items-start p-2">
        <div className="flex-[1]">
          <article className="text-[#ccc] max-w-[80%] text-sm">
            {music?.music_v}
          </article>
        </div>
        <div className="py-2">
          <FiMoreVertical className="text-[#ccc]" />
        </div>
      </div>
    </div>
  );
};

export default MusicVideo_Rows;
