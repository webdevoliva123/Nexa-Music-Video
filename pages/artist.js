import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import famousArtist from '@/json/famous-artist.json'
import Image from 'next/image'
import verifyIcon from '@/public/assest/icons/verify.png'
import numberFormatter from 'number_formatter'
import {AiFillPlayCircle} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
const Artist = () => {   
    const [currentArtist, setCurrentArtist] = useState()
    const { query } = useRouter()
    const followed = true

    useEffect(() => {
        setCurrentArtist(famousArtist.find(artist => artist.id === query.id))
    }, [query])

    return (
        <div className='relative w-full'>
            {/* Profile */}
            <div className='absolute top-0 left-0 w-full h-[65vh] bg-white z-0'>
                <Image src={currentArtist?.assets?.banner} alt='artist banner' width={500} height={500} className='relative w-full h-full object-cover filter brightness-[0.9]' />
                
            </div>
            <div className='relative w-full z-10'>
                {/* Header */}
                <div className='w-full h-[45vh] p-10 flex justify-start items-end'>
                    <div>
                        {currentArtist?.is_verified && <div className='flex justify-start items-center gap-2'>
                            <Image src={verifyIcon} alt='verifyIcon' width={500} height={500} className='relative w-5 h-5 object-contain' />
                            <article className='text-sm text-off-white'>Verified Artist</article>
                            </div>}
                        <article className='text-[80px] font-bold text-white leading-[100px] mb-5'>{currentArtist?.artist_name}</article>
                        <article className='text-off-white font-light'>{numberFormatter(currentArtist?.monthly_viewvers || 0)} Monthly Viewers</article>
                    </div>
                </div>
                {/* Content */}
                <div className='w-full h-[100vh] p-5' style={{
                    backdropFilter: 'blur(100px)'
                }}>
                    {/* Headeing */}
                    <div className='flex justify-start items-center gap-5'>
                        <AiFillPlayCircle className='text-green text-[50px] cursor-pointer'/>
                        <div className={`py-2 px-4 p border-[0.5px] hover:border border-[#fff] rounded-full cursor-pointer `}><article className={`text-sm  ${followed ? 'text-green': 'text-off-white'}`}>{followed ? 'Following' : 'Follow'}</article></div>
                        <FiMoreHorizontal className='text-[#ccc] text-2xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist
