import Image from "next/image";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
const Album = ({ artist_content }) => {
  console.log(artist_content);
  return artist_content?.playlists?.length !== 0 ? (
    <div className="w-full grid grid-cols-5 gap-5">
      {artist_content?.albums?.map((album, idx) => {
        console.log(album);
        if (idx < 5) {
          return (
            <div
              key={idx}
              className="w-full p-5 rounded-lg bg-[#222] bg-opacity-[0.5]"
            >
              <div className="w-full h-[150px] bg-[#222] mb-3">
                <Image
                  src={album?.album_poster}
                  alt="poster"
                  width={500}
                  height={500}
                  className="relative w-full h-full object-cover filter brightness-[0.9]"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="relative flex-[1]">
                  <article className="text-off-white text-sm mb-1">
                    {album?.album_name?.length > 15
                      ? `${album?.album_name?.slice(0, 15)}...`
                      : album?.album_name}
                  </article>
                  <article className="text-[#ccc] text-[10px]">
                    ALBUM . {`${album?.videos?.length} Music Videos`}
                  </article>
                </div>
                <div className="flex justify-end items-end">
                  <FiMoreVertical className="text-[#ccc] cursor-pointer" />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <>
      <article className="text-off-white text-3xl text-center h-[50vh] flex justify-center items-center">
        `No Playlist Have Been Created By {artist_content?.artist_name}`
      </article>
    </>
  );
};

export default Album;
