import React from "react";
import Image from "next/image";
import number_formatter from "number_formatter";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const AboutArtist = ({ artist_info }) => {
  return (
    <div className="flex items-start gap-10 h-full  ">
      {/* left section */}
      <div className="flex-[25%] h-full p-5 bg-[#000] bg-opacity-80 rounded-md">
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
      <div className="flex-[75%] w-full h-full p-5 bg-[#000] bg-opacity-80 overflow-y-auto rounded-md !text-sm !text-off-white">
        {artist_info?.about?.gallery?.length >= 3 && <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-[50vh] bg-black mb-10 rounded overflow-hidden">
        {
          artist_info?.about?.gallery?.map((img,idx) => idx !== 0 &&(
            <SwiperSlide><Image key={idx} src={img} width={500} height={500}  alt="image" className="relative w-full h-full object-cover filter brightness-[0.8]"/></SwiperSlide>
          ))
        }
        
      </Swiper>}
        <div className="max-h overflow-y-scroll custom-scroll">
        <div dangerouslySetInnerHTML={{__html : artist_info?.about?.summary}} />
        </div>
      </div>
    </div>
  );
};

export default AboutArtist;
 
