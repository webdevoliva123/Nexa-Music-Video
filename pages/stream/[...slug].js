
import MusicVideo_Player from '@/utils/MusicVideo_Player'
import React from 'react'

const Player = () => {
  return (
    <div className='relative w-full h-[75vh]'>
        <MusicVideo_Player videoSrc={'https://res.cloudinary.com/dkz1pnb2b/video/upload/v1696260069/2020_FESTA_BTS_%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB_We_are_Bulletproof_the_Eternal_MV_2020BTSFESTA_lgneob.mp4'} />
    </div>
  )
}

export default Player