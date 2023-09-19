import React from "react";
import MusicVideo_Gallery from "./MusicVideoContainer/MusicVideo_Gallery";

const OtherV = ({ artist_content }) => {
    const videos =  artist_content?.videos
  return artist_content?.videos?.length !== 0 ? (
    <>
      <div
        className={`relative w-full h-auto grid grid-cols-4 gap-5`}
      >
          <>
            {videos?.map((mv, idx) => {
              if (idx < 8) {
                return <MusicVideo_Gallery music={mv} key={idx} />;
              }
            })}
          </>
      </div>
    </>
  ) : (
    <>
      <article className="text-off-white text-3xl text-center">
        `No Music Videos Have Been Uploded By {artist_content?.artist_name}`
      </article>
    </>
  );
};

export default OtherV;
