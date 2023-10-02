
import TabContent from '@/components/component/artist/TabContent';
import MusicVideo_Player from '@/utils/MusicVideo_Player'
import React, { useEffect, useState } from 'react'
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import famousArtist from "@/json/famous-artist.json";

const Player = () => {
  const tabs = [
    {
      id: "official-mv",
      name: "Official MV",
    },
    {
      id: "albums-by-artist",
      name: "Albums",
    },
    {
      id: "playlist-by-artist",
      name: "Playlist",
    },
    {
      id: "other-videos",
      name: "Other Videos",
    },
  ];
  const [currentArtist, setCurrentArtist] = useState();
  const [currentTab, setCurrentTab] = useState("official-mv");
  const [currentView, setCurrentView] = useState(1);

  const followed = true;


  useEffect(() => {
    setCurrentArtist(famousArtist.find((artist) => artist.id === 'iu'));
  }, []);
  return (
    <div>
      <div className='relative w-full h-[75vh] '>
        <MusicVideo_Player videoSrc={'https://res.cloudinary.com/dkz1pnb2b/video/upload/v1696260069/2020_FESTA_BTS_%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB_We_are_Bulletproof_the_Eternal_MV_2020BTSFESTA_lgneob.mp4'} />
        
    </div>
    <div className="w-full mb-16 px-10">
    <article className="text-[#fff] text-3xl font font-semibold mb-8 cursor-pointer">
      Discover All.
    </article>
    {/* Tabs */}
    <div className="w-full border-b-[0.1px] border-off-white pb-5  flex justify-between items-center mb-8">
      {/* left section */}
      <div className="flex justify-start items-center gap-4">
        {tabs.map((tab, idx) => {
          return (
            <div
              key={idx}
              className="py-2 px-4 bg-[#222] rounded-full"
              onClick={() => setCurrentTab(tab.id)}
            >
              <article
                className={`text-xs ${
                  currentTab === tab.id
                    ? "text-green"
                    : "text-off-white"
                } cursor-pointer`}
              >
                {tab.name}
              </article>
            </div>
          );
        })}
      </div>
      {/* rigth section */}
      <div className="flex justify-end items-center gap-3">
        <article className="text-[10px] text-off-white cursor-pointer">
          SHOW MORE
        </article>
        {currentTab === "official-mv" && (
          <div className="flex justify-end items-center gap-2">
            <CiGrid41
              className={`${
                currentView === 1 ? "text-green" : "text-off-white"
              } text-xl cursor-pointer`}
              onClick={() => setCurrentView(1)}
            />
            <CiGrid2H
              className={`${
                currentView === 2 ? "text-green" : "text-off-white"
              } text-xl cursor-pointer`}
              onClick={() => setCurrentView(2)}
            />
          </div>
        )}
      </div>
    </div>

    {/* tab Conetnt */}
    <TabContent
      current_tab={currentTab}
      artist_content={currentArtist}
      tab_view={currentView}
    />
  </div>
    </div>
  )
}

export default Player