import React from "react";
import playlists from "@/json/playlist.json";
import Lib_Playlist from "./Lib_Playlist/Lib_Playlist";
import Lib_Artists from "./Lib_Artists/Lib_Artists";
import Lib_Album from "./Lib_Album/Lib_Album";
import likedSongs from "@/json/liked-songs.json";
import Image from "next/image";
import favoriteIcon from "@/public/assest/icons/favorite.jpeg";
import {AiFillPushpin} from 'react-icons/ai'

const Library = () => {
  const SprateComponent = (type, data) => {
    switch (type) {
      case "playlist":
        return <Lib_Playlist data={data} />;
      case "artist":
        return <Lib_Artists data={data} />;
      case "album":
        return <Lib_Album data={data} />;
    }
  };
  return (
    <div className="w-full">
      {/* Liked Songs */}
      <div className="w-full p-2 flex justify-start items-center gap-4 hover:bg-[#222] cursor-pointer mb-2">
        {/* playlist icon */}
        <div className="w-[45px] h-[45px] bg-[#222] rounded-lg overflow-hidden">
          <Image
            src={favoriteIcon}
            alt={"Liked Songs"}
            width={500}
            height={500}
            className={"relative w-full h-full object-cover"}
          />
        </div>
        {/* information */}
        <div className="flex-[1] w-full">
          <article className="text-[#fff] text-sm">Liked Music Videos</article>
          <div className="flex justify-start items-center "><AiFillPushpin className="text-green text-xs mr-2" /> <div className="text-[12px] text-[#ccc] capitalize">
          Playlist  <span>.</span> {`${likedSongs.length} Songs`}
          </div></div>
          
        </div>
      </div>
      {/* playlist & other */}
      {playlists.map((playlist, index) => {
        return (
          <div>
            <div key={index} className="mb-2">
              {SprateComponent(playlist.type, playlist)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Library;
