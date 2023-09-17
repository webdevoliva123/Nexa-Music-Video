import React from 'react'
import MusicVideo from '../home/MusicVideo'

const OfficialMV = ({artist_content,tab_view}) => {
  return (
    <div className={`relative w-full h-auto grid ${tab_view === 1 ? 'grid-cols-4 gap-5' : 'grid-cols-1' }`}>
        {
            tab_view === 1 ? 
            <>
                {
                    artist_content?.videos?.map((mv,idx) => {
                        return (
                            <MusicVideo music={mv} key={idx}/>
                        )
                    })
                }
            </> :
            <>
            </>
        }
    </div>
  )
}

export default OfficialMV