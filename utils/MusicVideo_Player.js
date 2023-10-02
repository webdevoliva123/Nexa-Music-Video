import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbRepeat,
  TbArrowsShuffle,
} from "react-icons/tb";
import {
  BsFullscreen,
  BsFullscreenExit,
  BsFillVolumeUpFill,
  BsFillVolumeOffFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
  BsVolumeDownFill
} from "react-icons/bs";
import {
  AiTwotoneSetting
} from "react-icons/ai";
import {
  PiMicrophoneStageFill,
  PiComputerTowerFill
} from "react-icons/pi";

const MusicVideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    const progressElement = progressBar.current;

    const duration = Math.floor(videoElement?.duration);
    progressElement.max = duration;

    setTotalDuration(duration);
  }, [videoRef?.current?.loademetadata, videoRef?.current?.readyState]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    const prevVal = isPlaying;
    setIsPlaying(!prevVal);
    if (!prevVal) {
      videoRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      videoRef?.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = videoRef.current.currentTime;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / totalDuration) * 100}%`
    );
    setCurrentTime(progressBar?.current.value);

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const progessBarHandler = () => {
    videoRef.current.currentTime = progressBar?.current?.value;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / totalDuration) * 100}%`
    );
    setCurrentTime(progressBar?.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    progessBarHandler();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    progessBarHandler();
  };

  return (
    <>
      <div className="relative w-full h-full z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          className="relative w-full h-full object-cover z-0 filter brightness-[0.8]"
          preload="metadata"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(transparent, #111 90%)",
          zIndex: 0,
        }}
      ></div>
      <div className="video_player">
        <div className="flex-[0.2] w-full flex justify-start items-end gap-4">
          <div className="relative player_thumbnail">
            <Image
              src={
                "https://res.cloudinary.com/dkz1pnb2b/image/upload/v1696282249/artworks-J0d7yp5KwzT1byv7-Nz492w-t500x500_eclexk.jpg"
              }
              alt="thumbnail"
              width={500}
              height={500}
              className="relative w-full h-full object-cover"
            />
            <div className={`msuic_playing_indicatior ${isPlaying && 'active'}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <PiComputerTowerFill  size={'25'} className="text-white hover:text-green cursor-pointer !ml-5" />
          <PiMicrophoneStageFill  size={'20'} className="text-white hover:text-green cursor-pointer !mr-5" />
        </div>
        <div className="flex-[0.6] w-full  flex flex-col justify-center items-center">
          {/* top */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <TbArrowsShuffle
              size={"15"}
              className="text-off-white text-[20px] "
            />
            <TbPlayerTrackPrev
              size={"20"}
              className="text-[#fff] text-[20px] cursor-pointer"
              onClick={backThirty}
            />
            {/*  */}
            {!isPlaying ? (
              <TbPlayerPlayFilled
                size={"40"}
                className="text-green text-[20px] cursor-pointer"
                onClick={handlePlayPause}
              />
            ) : (
              <TbPlayerPauseFilled
                size={"40"}
                className="text-white text-[20px] cursor-pointer"
                onClick={handlePlayPause}
              />
            )}
            {/*  */}
            <TbPlayerTrackNext
              size={"20"}
              className="text-[#fff] text-[20px] cursor-pointer "
              onClick={forwardThirty}
            />
            <TbRepeat size={"15"} className="text-off-white text-[20px] ml-5" />
          </div>
          {/* middle */}
          <div className="player_idicator mb-5">
            {/* current time */}
            <article className="player_current_time">
              {formatTime(currentTime) || "00:00"}
            </article>
            <input
              ref={progressBar}
              type="range"
              className="player_idicator_position"
              onChange={progessBarHandler}
              defaultValue={0}
            />
            {/* total duration */}
            <article className="player_total_duration">
              {(totalDuration &&
                !isNaN(totalDuration) &&
                formatTime(totalDuration)) ||
                "00:00"}
            </article>
          </div>
          {/* bottom */}
          <div className="flex flex-col justify-center items-center">
            <article className="text-off-white text-sm text-center">
              {" "}
              [IU] 내 손을 잡아(Hold My Hand) 
            </article>
          </div>
        </div>
        <div className="flex-[0.2] w-full">
          <div className="other_options_container">
          <BsFillVolumeUpFill  size={'20'} className="text-white hover:text-green cursor-pointer" />
          <AiTwotoneSetting  size={'20'} className="text-white hover:text-green cursor-pointer" />
          <BsFullscreen  size={'20'} className="text-white hover:text-green cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicVideoPlayer;
