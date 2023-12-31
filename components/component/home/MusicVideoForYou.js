import React from "react";
import MusicVideo from "./MusicVideo";

const MusicVideoForYou = ({ music_video, showVideo }) => {
  return (
    <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {music_video?.map((music, indx) => {
        if (indx < showVideo ) {
          return <MusicVideo music={music} key={indx} />;
        }
      })}
    </div>
  );
};

export default MusicVideoForYou;
