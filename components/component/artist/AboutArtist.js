import React from "react";
import Image from "next/image";
import number_formatter from "number_formatter";

const AboutArtist = ({ artist_info }) => {
  return (
    <div className="flex items-start gap-10 h-full  ">
      {/* left section */}
      <div className="flex-[25%] h-full p-5 bg-[#222] bg-opacity-80 rounded-md">
        <div className="w-[200px] h-[200px] rounded-full mx-auto  overflow-hidden mb-5">
            <Image src={artist_info?.about?.gallery[0]} alt="profile_image" width={500} height={500} className="relative w-full h-full object-cover filter brightness-[0.8]" />
        </div>
        <article className="text-center text-off-white text-xl font-semibold mb-16">{artist_info?.about?.original_name}</article>

        <div className="!text-center mb-8">
            <article className="text-3xl font-extrabold text-white mb-2">{number_formatter(artist_info?.about?.followers || 0)}</article>
            <article className="text-off-white text-xs">Followers</article>
        </div>

        <div className="!text-center mb-10">
            <article className="text-3xl font-extrabold text-white mb-2">{number_formatter(artist_info?.about?.monthly_viewvers || 0)}</article>
            <article className="text-off-white text-xs">Mohtly Views</article>
        </div>

        <div className="!text-center mb-4">
            <article className="text-xl font-semibold text-white mb-1">In Korea</article>
            <article className="text-xs text-white">{number_formatter(artist_info?.about?.Korea || 0)} Monthly Views</article>
        </div>
        <div className="!text-center mb-4">
            <article className="text-xl font-semibold text-white mb-1">In Japan</article>
            <article className="text-xs text-white">{number_formatter(artist_info?.about?.Japan || 0)} Monthly Views</article>
        </div>
        <div className="!text-center mb-4">
            <article className="text-xl font-semibold text-white mb-1">In India</article>
            <article className="text-xs text-white">{number_formatter(artist_info?.about?.India || 0)} Monthly Views</article>
        </div>
        <div className="!text-center mb-4">
            <article className="text-xl font-semibold text-white mb-1">In USA</article>
            <article className="text-xs text-white">{number_formatter(artist_info?.about?.USA || 0)} Monthly Views</article>
        </div>
      </div>
      {/* rigth section */}
      <div className="flex-[75%] h-full p-5 bg-[#222] bg-opacity-80 overflow-y-auto custom-scroll rounded-md !text-sm !text-off-white">
        <div dangerouslySetInnerHTML={{__html : artist_info?.about?.summary}} />
      </div>
    </div>
  );
};

export default AboutArtist;
 