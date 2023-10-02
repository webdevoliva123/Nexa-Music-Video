import React from "react";
import MusicVideo_Gallery from "./MusicVideoContainer/MusicVideo_Gallery";

const OtherV = ({ artist_content }) => {
    const videos =  artist_content?.others
    console.log(videos);
  return videos.length !== 0 ? (
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
      <div className="text-off-white text-3xl text-center h-[50vh] flex justify-center items-center  w-full ">
        `No Music Videos Have Been Uploded By {artist_content?.artist_name}`
      </div>
    </>
  );
};

export default OtherV;
