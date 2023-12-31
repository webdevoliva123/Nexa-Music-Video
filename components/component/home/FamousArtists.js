import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'

const FamousArtists = ({Artists}) => {
  const router = useRouter()
  return (
    <div className='w-full grid sm:grid-cols-5 grid-cols-2 gap-5'>
      {
        Artists?.map((artist,idx) => {
          if(idx <= 4){
            return (
              <div key={idx} className='famous_artist_card relative w-full h-[250px] p-5 bg-[#222] bg-opacity-[0.5] hover:bg-opacity-[0.8] rounded-lg shadow-2xl cursor-pointer' onClick={() => router.push(`/artist/${artist?.id}`)}>
                <div className='relative w-[150px] h-[150px] bg-black rounded-full shadow-xl mb-4'>
                  <Image src={artist?.assets?.poster} alt={`${artist?.artist_name} poster`} width={500} height={500} className='relative w-full h-full object-cover filter brightness-[0.9] z-0 rounded-full shadow-2xl' />
                  <div className='player absolute bottom-2 right-0 w-[50px] h-[50px] bg-green z-15 rounded-full flex justify-center items-center'>
                    <BsFillPlayFill className='text-black text-2xl' />
                  </div>
                </div>
                {/*  */}
                <article className='text-center text-white font-bold mb-1'>{artist?.artist_name}</article>
                <article className='text-[10px] text-center text-[#ccc]'>SOLO ARTIST</article>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default FamousArtists