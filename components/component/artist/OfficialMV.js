import React from "react";
import MusicVideo_Gallery from "./MusicVideoContainer/MusicVideo_Gallery";
import MusicVideo_Rows from "./MusicVideoContainer/MusicVideo_Rows";

const OfficialMV = ({ artist_content, tab_view }) => {
  return artist_content?.videos?.length !== 0 ? (
    <>
      <div
        className={`relative w-full h-auto grid ${
          tab_view === 1 ? "grid-cols-4 gap-5" : "grid-cols-1"
        }`}
      >
        {tab_view === 1 ? (
          <>
            {artist_content?.videos?.map((mv, idx) => {
              if (idx < 12) {
                return <MusicVideo_Gallery music={mv} key={idx} />;
              }
            })}
          </>
        ) : (
          <>
            {artist_content?.videos?.map((mv, idx) => {
              if (idx < 4) {
                return (
                  <MusicVideo_Rows
                    music={mv}
                    key={idx}
                    artistInformation={artist_content}
                  />
                );
              }
            })}
          </>
        )}
      </div>
    </>
  ) : (
    <>
      <div className="text-off-white text-3xl text-center h-[50vh] flex justify-center items-center">
        `No Music Videos Have Been Uploded By {artist_content?.artist_name}`
      </div>
    </>
  );
};

export default OfficialMV;
