import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import globalMusic from "@/json/global-music.json";


const BackgroundVideo = ({ url }) => {
  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      className="w-full h-full object-cover filter brightness-[0.8]  scale-[1.2]"
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

function GlobalMusic() {
  return (
    <>
      <div className="relative w-full h-[70vh]">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <BackgroundVideo url={globalMusic[0].poster.video} />
          {/* <Image src={music_v.poster.photo} width={500} height={500} className="relative w-full h-full object-cover" /> */}
        </div>

        {/*  */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(transparent,#111 75%)",
            zIndex: 0,
          }}
        ></div>

        {/* player */}
        <div className="absolute left-0 bottom-44 flex justify-start items-center w-full z-100  p-5">
          <div className="">
            <div className="flex justify-start items-center">
              <Image
                src={globalMusic[0].poster.photo}
                width={500}
                height={500}
                className="relative w-24 h-24 mr-5 rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center items-start">
                <article className="text-[#fff]  font-light text-xs ">
                  #1 Music Video
                </article>
                <article className="text-[#fff] font-medium text-[40px] leading-[60px] mb-2">
                  {globalMusic[0].music_v.length > 25
                    ? `${globalMusic[0].music_v.slice(0, 25)}..`
                    : globalMusic[0].music_v}
                  .
                </article>
                <article className="text-green cursor-pointer hover:underline flex justify-start items-center gap-2">
                  <BsPlayCircle className="text-[24px]" /> Play
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalMusic;
