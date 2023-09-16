import Image from 'next/image'
import React from 'react'

const Lib_Playlist = ({data}) => {
  return (
    <div className='w-full p-2 flex justify-start items-center gap-4 hover:bg-[#222] cursor-pointer'>
        {/* playlist icon */}
        <div className='w-[45px] h-[45px] bg-[#222] rounded-lg overflow-hidden'>
            {data.music_videos.length < 5 ? 
            <>
                <Image src={data?.music_videos[0].assests?.poster} alt={data?.name} width={500} height={500} className={'relative w-full h-full object-cover'} />
            </> :
            <>
                <div className='w-full h-full grid grid-cols-2 grid-rows-2'>
                <Image src={data?.music_videos[0].assests?.poster} alt={data?.name} width={500} height={500} className={'relative w-full h-full object-cover'} />
                <Image src={data?.music_videos[1].assests?.poster} alt={data?.name} width={500} height={500} className={'relative w-full h-full object-cover'} />
                <Image src={data?.music_videos[2].assests?.poster} alt={data?.name} width={500} height={500} className={'relative w-full h-full object-cover'} />
                <Image src={data?.music_videos[3].assests?.poster} alt={data?.name} width={500} height={500} className={'relative w-full h-full object-cover'} />
                </div>
            </>
            }
        </div>
        {/* information */}
        <div className='flex-[1] w-full'>
            <article className='text-[#fff] text-sm'>{data?.playlistName}</article>
            <div className='text-[12px] text-[#ccc] capitalize'>{data.type} <span>.</span> {`${data?.music_videos.length} Songs`}</div>
        </div>
    </div>
  )
}

export default Lib_Playlist