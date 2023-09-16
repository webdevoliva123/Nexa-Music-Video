import React from 'react'
import MusicVideo from './MusicVideo'

const MusicVideoForYou = ({music_video}) => {
  return (
    <div className='relative w-full grid grid-cols-4 gap-6'>
        {
            music_video?.map((music,indx) => {
                return (
                    <MusicVideo music={music} key={indx} />
                )
            })
        }
    </div>
  )
}

export default MusicVideoForYou