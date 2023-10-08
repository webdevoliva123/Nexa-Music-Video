
import TabContent from '@/components/component/artist/TabContent';
import MusicVideo_Player from '@/utils/MusicVideo_Player'
import React, { useEffect, useState } from 'react'
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import famousArtist from "@/json/famous-artist.json";
import { useMaximizeScreen, usePlayVideo } from '@/store_management/player_manager';
import Head from 'next/head';
import videos from '@/json/videos.json'

const Player = ({id,video,artist}) => {


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
  const screenFull =  useMaximizeScreen((state) => state.screenFull)
  const maximizeFunction = useMaximizeScreen((state) => state.maximizeHandler)
  const minimizeFunction = useMaximizeScreen((state) => state.minimizeHandler)
  const isVideoPlaying = usePlayVideo((state) => state.play)
  const makePlayHandler = usePlayVideo((state) => state.makePlayHanlder)
  const makePauseHandler = usePlayVideo((state) => state.makePauseHandler)

  useEffect(() => {
    setCurrentArtist(famousArtist.find((artist) => artist.id === 'iu'));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown',(event) => {
      if (event.key === 'f' || event.key === 'F') {
        if(!screenFull){
          maximizeFunction()
        }else{
          minimizeFunction()
        }
      }

      if(event.code === 'Space'){
        if(!isVideoPlaying){
          makePlayHandler()
        }else{
          makePauseHandler()
        }
      }
    })
  })



  return (
    <div className=''>
      {/* title  */}
      <Head>
        <title>{video.title}</title>
      </Head>
      <div className={!screenFull ? 'relative w-full h-[80vh] overflow-hidden ' : 'fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999] bg-[#000]'}>
        <MusicVideo_Player title={video?.title} thumbnail={video?.thumbnail} videoSrc={video?.url}  artistImage={artist?.thumbnail}/>
        
    </div>
    <div className="w-full mb-16 px-10 py-10">
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



export const getServerSideProps = async ({query}) => {
  const artist = query.slug[0]
  const stream_video = query.slug[1]

  const get_video =  videos.filter(video => video.id === stream_video)[0]

  return {
    props : {
      id: get_video?.id || '',
      artist  :  {...get_video?.artist,artist_id : artist} || {},
      video : get_video?.video || {}
    }
  }
}

export default Player