import { useRouter } from 'next/router'
import React from 'react'
import {PiGithubLogoThin, PiLinkedinLogoThin, PiDesktopThin} from 'react-icons/pi'

const MainFooter = () => {
    const famousGroups = [
        {
            name : 'BTS',
            href : '/group?name=bts'
        },
        {
            name : 'Blackpink',
            href : '/group?name=blackpink'
        },
        {
            name : 'Winner',
            href : '/group?name=winner'
        },
        {
            name : 'Bol4',
            href : '/group?name=bol4'
        },
        {
            name : 'Woo!ah!',
            href : '/group?name=wooah'
        },
        {
            name : 'Seventeen',
            href : '/group?name=seventeen'
        }
    ]

    const famousArtists = [
        {
            name : 'IU',
            href : '/artist?id=iu'
        },
        {
            name : 'OLNL',
            href : '/artist?id=olnl'
        },
        {
            name : 'Sunmi',
            href : '/artist?id=sunmi'
        },
        {
            name : 'DEAN',
            href : '/artist?id=dean'
        }
    ]

    const router = useRouter()
  return (
    <div className='relative w-full p-5'>
        {/* top footer */}
        <div className='w-full h-full flex justify-between items-start mb-10 pb-10 border-b border-[#ccc] border-opacity-[0.5]'>
            {/* left section */}
            <div className='w-[60%] grid grid-cols-3 '>
                <div className='w-full relative'>
                    <article className='text-base font-semibold text-[#fff] mb-4'>Quick Links</article>
                    <div className='flex flex-col justify-start items-start'>
                        <article className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green'>About us</article>
                        <article className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green'>Support</article>
                        <article className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green'>Privacy & Policy</article>
                        <article className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green'>Features</article>
                    </div>
                </div>
                <div className='w-full relative'>
                    <article className='text-base font-semibold text-[#fff] mb-4'>Famous Group</article>
                    <div className='flex flex-col justify-start items-start'>
                        {
                            famousGroups.map((group,idx) => {
                                return <article key={idx} className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green'>{group?.name}</article>
                            })
                        }
                    </div>
                </div>
                <div className='w-full relative'>
                    <article className='text-base font-semibold text-[#fff] mb-4'>Famous Artists</article>
                    <div className='flex flex-col justify-start items-start'>
                        {
                            famousArtists.map((artist,idx) => {
                                return <article key={idx} className='text-xs font-semibold text-[#ccc] mb-2 cursor-pointer hover:text-green' onClick={() => router.push(artist.href)}>{artist?.name}</article>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[40%] flex justify-end items-start gap-3'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#222] bg-opacity-[0.5] hover:bg-opacity-[0.8]  rounded-full cursor-pointer'>
                    <PiDesktopThin className='text-white text-xl' />
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#222] bg-opacity-[0.5] hover:bg-opacity-[0.8]  rounded-full cursor-pointer'>
                    <PiLinkedinLogoThin className='text-white text-xl' />
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#222] bg-opacity-[0.5] hover:bg-opacity-[0.8]  rounded-full cursor-pointer'>
                    <PiGithubLogoThin className='text-white text-xl' />
                </div>
            </div>
        </div>
        {/* bottom footer */}
        <div className="flex justify-between items-center">
            <article className='text-white text-xs'>Created By Oliva 🍁. | Created For Practice.</article>
            <article className='text-white text-xs'>@2023 AXA MUSIC VIDEOS</article>
        </div>
    </div>
  )
}

export default MainFooter