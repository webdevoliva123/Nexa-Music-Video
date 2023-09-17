import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import formateNumber from 'number_formatter'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'


const MusicVideo_Rows = ({ music, artistInformation }) => {
    const [videoDuration,setVedioDuration] = useState(`00:00`)

  return (
    <div
      className={`w-full cursor-pointer flex justify-start items-center mb-2 hover:bg-[#222] hover:bg-opacity-[0.5] py-4 px-5 rounded-lg gap-10`}
    >
      <div className="flex justify-start items-center flex-[50%]">
        {/* thumbnail */}
        <div className="relative w-[200px] h-[75px] bg-[#000] rounded-xl overflow-hidden mr-2">
          <Image
            src={music?.poster?.thumbnail}
            alt="music video thumbnail"
            width={500}
            height={500}
            className="relative w-full h-full object-cover filter brightness-[0.8]"
          />
        </div>
        {/* information */}
        <div className="w-full  flex justify-start items-start p-2">
          <div className="">
            <article className="text-[#ccc] max-w-[80%] text-sm">
              {music?.music_v}
            </article>
          </div>
        </div>
      </div>


        <div className="text-xs text-off-white flex justify-center items-center flex-[25%]">{formateNumber(artistInformation?.monthly_viewvers)}</div>


      <div className="py-2 flex-[25%] flex justify-end items-center gap-5">
        {false ? <AiFillHeart className="text-xl text-green" /> : <AiOutlineHeart  className="text-xl text-green"/>}
        <article className="text-off-white text-xs">00:00</article>
        <FiMoreVertical className="text-[#ccc]" />
      </div>
    </div>
  );
};

export default MusicVideo_Rows;
