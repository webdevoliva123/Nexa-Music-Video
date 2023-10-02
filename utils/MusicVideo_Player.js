import React, { useState, useRef, useEffect } from "react";
import {TbPlayerTrackPrev, TbPlayerTrackNext, TbPlayerPauseFilled, TbPlayerPlayFilled,TbRepeat,TbArrowsShuffle} from 'react-icons/tb'

const MusicVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [totalDuration, setTotalDuration] = useState('00:00');
  const [currentTime,setCurrentTime] = useState('00:00');

  useEffect(() => {
    // Check if it's the first render
    if (!hasPlayed) {
      // Pause the video initially
      videoRef?.current?.pause();
    }
  }, [hasPlayed]);


  const handlePlayPause = () => {
    if (!hasPlayed) {
      // If it's the first play, set hasPlayed to true
      setHasPlayed(true);
    }

    if (isPlaying) {
      videoRef?.current?.pause();
    } else {
      videoRef?.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    // Add event listener for the ended event
    videoElement.addEventListener('ended', () => {
      setIsPlaying(false)
    });

    videoElement.addEventListener('loadedmetadata', () => {
      setTotalDuration(videoElement.duration);
    })

    videoElement.addEventListener('timeupdate', () => {
      setCurrentTime(videoElement.currentTime);
    });

    




    // Clean up the event listener on component unmount
    return () => {
      videoElement.removeEventListener('ended', () => {
        setIsPlaying(false)
      });

      
    };

   

    
  }, []);

  const calculatePercentage = (currentTime, totalDuration) => {
    if (isNaN(currentTime) || isNaN(totalDuration) || currentTime === null || totalDuration === null) {
      return 0;
    }
  
    return (currentTime / totalDuration) * 100;
  };

  useEffect(() => {
    console.log(); 
  })
  return (
    <>
      <div className="relative w-full h-full z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          className="relative w-full h-full object-cover z-0 filter brightness-[0.8]"

        />
      </div>
      <div
        className="video_player"
      >
       <div className="flex-[0.2] w-full"></div> 
       <div className="flex-[0.6] w-full  flex flex-col justify-center items-center">
          {/* top */}
          <div className="flex justify-center items-center gap-2 mb-4">
          <TbArrowsShuffle size={'15'} className="text-off-white text-[20px] "/>
            <TbPlayerTrackPrev size={'20'} className="text-[#fff] text-[20px]"/>
            {/*  */}
              {!isPlaying ? <TbPlayerPlayFilled size={'40'} className="text-green text-[20px] cursor-pointer" onClick={handlePlayPause}/> : <TbPlayerPauseFilled size={'40'} className="text-white text-[20px] cursor-pointer" onClick={handlePlayPause}/>  }
            {/*  */}
            <TbPlayerTrackNext size={'20'} className="text-[#fff] text-[20px] "/>
            <TbRepeat size={'15'} className="text-off-white text-[20px] ml-5"/>
          </div>
          <div className="player_idicator">
            {/* current time */}
            <article className="player_current_time">{formatTime(currentTime) || '00:00'}</article>
            <div className="player_idicator_position" style={{ width: `${calculatePercentage(currentTime, totalDuration)}%` }}>
              
            </div>
            {/* total duration */}
            <article className="player_total_duration">{formatTime(totalDuration) || '00:00'}</article>
          </div>
       </div>
       <div className="flex-[0.2] w-full"></div>
      </div>
    </>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default MusicVideoPlayer;

