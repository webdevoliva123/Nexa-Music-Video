import Image from "next/image";
import React, { useState } from "react";
import {FiMoreVertical} from 'react-icons/fi'

const MusicVideo = ({ music }) => {
    const [isHover,setIsHover] = useState(false)
  return (
    <div className={`w-full cursor-pointer`} onMouseEnter={() =>  setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {/* thumbnail */}
      <div className="relative w-full h-[160px] bg-[#000] rounded-xl overflow-hidden mb-2">
       {isHover ?
       <video src={music.poster.video} className="w-full h-full object-cover filter brightness-[0.8]" muted autoPlay  />
       :
         <Image
          src={music.poster.thumbnail}
          alt="music video thumbnail"
          width={500}
          height={500}
          className="relative w-full h-full object-cover filter brightness-[0.8]"
        />}
      </div>
      {/* information */}
      <div className="w-full flex justify-start items-start p-2">
        <div className="flex-[1]">
          <article className="text-[#ccc] max-w-[80%]">{music?.music_v}</article>
          <article className="text-green text-xs">By {music?.artist}</article>
        </div>
        <div className="py-2">
        <FiMoreVertical className="text-[#ccc]" />
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;