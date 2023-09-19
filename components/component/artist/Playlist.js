import Image from "next/image";
import React from "react";
import {FiMoreVertical} from 'react-icons/fi'
const Playlist = ({ artist_content }) => {

  return artist_content?.playlists?.length > 0 ? (
    <div className="w-full grid grid-cols-5 gap-5">
        {
            artist_content?.playlists?.map((playlist,idx) => {
               if(idx < 5){
                return (
                    <div key={idx} className="w-full p-5 rounded-lg bg-[#222] bg-opacity-[0.5]">
                        <div className="w-full h-[150px] bg-[#222] mb-3">
                            {
                                playlist?.videos?.length > 5 ?
                                <div className="w-full h-full grid grid-cols-2 grid-rows-2 rounded-lg overflow-hidden">
                                    {
                                        playlist?.videos?.map((video,idx) => {
                                            if(idx < 4){
                                                return <Image key={idx} src={video?.poster?.photo} alt="poster" width={500} height={500} className="relative w-full h-full object-cover filter brightness-[0.9]" />
                                            }
                                        })
                                    }
                                </div>:
                                <div className="w-full h-full rounded-lg overflow-hidden">
                                    <Image src={playlist?.videos[0]?.poster?.photo} alt="poster" width={500} height={500} className="relative w-full h-full object-cover filter brightness-[0.9]" />
                                </div>

                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="relative flex-[1]">
                                <article className="text-off-white text-sm mb-1">{playlist?.playlist_name}</article>
                                <article className="text-[#ccc] text-[10px]">PLAYLIST . {`${playlist?.videos?.length} Music Videos`}</article>
                            </div>
                            <div className="flex justify-end items-end">
                            <FiMoreVertical className="text-[#ccc] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )
               }
            })
        }
    </div>
  ) : (
    <>
      <article className="text-off-white text-3xl text-center">
        `No Playlist Have Been Created By {artist_content?.artist_name}`
      </article>
    </>
  );
};

export default Playlist;
