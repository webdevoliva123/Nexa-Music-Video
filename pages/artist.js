import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import famousArtist from "@/json/famous-artist.json";
import Image from "next/image";
import verifyIcon from "@/public/assest/icons/verify.png";
import numberFormatter from "number_formatter";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import MusicVideoForYou from "@/components/component/home/MusicVideoForYou";
import Head from "next/head";
import {CiGrid2H,CiGrid41} from 'react-icons/ci'
import TabContent from "@/components/component/artist/TabContent";
const Artist = () => {
  const tabs = [
    {
      id: "official-mv",
      name: "Official MV",
    },
    {
        id: "playlist-by-artist",
        name: "Playlist",
    },
    {
        id: "album-by-artist",
        name: "Album",
    },
    {
        id: "other-videos",
        name: "Other Videos",
    }
  ];
  const [currentArtist, setCurrentArtist] = useState();
  const [currentTab,setCurrentTab] = useState('official-mv')
  const [currentView,setCurrentView] = useState(1)

  const { query } = useRouter();
  const followed = true;

  useEffect(() => {
    setCurrentArtist(famousArtist.find((artist) => artist.id === query.id));
  }, [query]);

  return (
    <div className="relative w-full">
      {/* title  */}
      <Head>
        <title>{currentArtist?.artist_name} | SOLO ARTIST</title>
      </Head>
      {/* Profile */}
      <div className="absolute top-0 left-0 w-full h-[65vh] z-0">
        <Image
          src={currentArtist?.assets?.banner}
          alt="artist banner"
          width={500}
          height={500}
          className="relative w-full h-full object-cover filter brightness-[0.9]"
        />
      </div>
      <div className="relative w-full z-10">
        {/* Header */}
        <div className="w-full h-[45vh] p-10 flex justify-start items-end">
          <div>
            {currentArtist?.is_verified && (
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={verifyIcon}
                  alt="verifyIcon"
                  width={500}
                  height={500}
                  className="relative w-5 h-5 object-contain"
                />
                <article className="text-sm text-off-white">
                  Verified Artist
                </article>
              </div>
            )}
            <article className="text-[80px] font-bold text-white leading-[100px] mb-5">
              {currentArtist?.artist_name}
            </article>
            <article className="text-off-white font-light">
              {numberFormatter(currentArtist?.monthly_viewvers || 0)} Monthly
              Viewers
            </article>
          </div>
        </div>
        {/* Content */}
        <div
          className="w-full min-h-[100vh] p-5"
          style={{
            backdropFilter: "blur(100px)",
          }}
        >
          {/* Headeing */}
          <div className="flex justify-start items-center gap-5 mb-10">
            <AiFillPlayCircle className="text-green text-[50px] cursor-pointer" />
            <div
              className={`py-2 px-4 p border-[0.5px] hover:border border-[#fff] rounded-full cursor-pointer `}
            >
              <article
                className={`text-sm  ${
                  followed ? "text-green" : "text-off-white"
                }`}
              >
                {followed ? "Following" : "Follow"}
              </article>
            </div>
            <FiMoreHorizontal className="text-[#ccc] text-2xl cursor-pointer" />
          </div>

          {/* Body */}
          {/* Play For You */}
          <div className="w-full mb-16">
            <article className="text-[#fff] text-3xl font font-semibold mb-8 cursor-pointer">
              Official Music Videos By {currentArtist?.artist_name}.
            </article>
            <MusicVideoForYou
              music_video={currentArtist?.videos}
              showVideo={4}
            />
          </div>

          {/* Play For You */}
          <div className="w-full mb-20">
            <article className="text-[#fff] text-3xl font font-semibold mb-8 cursor-pointer">
              Discover All.
            </article>
            {/* Tabs */}
            <div className="w-full border-b-[0.5px] border-[#ccc] pb-5  flex justify-between items-center mb-10">
              {/* left section */}
              <div className="flex justify-start items-center gap-4">
              {
                tabs.map((tab, idx) => {
                    return (
                        <div key={idx} className="py-2 px-4 bg-[#222] rounded-full" onClick={() => setCurrentTab(tab.id)}>
                            <article className={`text-xs ${currentTab === tab.id ? 'text-green' : 'text-off-white'} cursor-pointer`}>{tab.name}</article>
                        </div>
                    )
                })
              }
              </div>
              {/* rigth section */}
              <div className="flex justify-end items-center gap-2">
                <CiGrid41 className={`${currentView === 1 ? 'text-green' :  'text-off-white'} text-xl cursor-pointer`} onClick={() => setCurrentView(1)} />
                <CiGrid2H className={`${currentView === 2 ? 'text-green' :  'text-off-white'} text-xl cursor-pointer`} onClick={() => setCurrentView(2)}/>
              </div>
            </div>

              {/* tab Conetnt */}
              <TabContent current_tab={currentTab} artist_content={currentArtist} tab_view={currentView} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
