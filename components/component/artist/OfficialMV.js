import React from 'react'
import MusicVideo_Gallery from './MusicVideoContainer/MusicVideo_Gallery'
import MusicVideo_Rows from './MusicVideoContainer/MusicVideo_Rows'

const OfficialMV = ({artist_content,tab_view}) => {
  return (
    <div className={`relative w-full h-auto grid ${tab_view === 1 ? 'grid-cols-4 gap-5' : 'grid-cols-1' }`}>
        {
            tab_view === 1 ? 
            <>
                {
                    artist_content?.videos?.map((mv,idx) => {
                        return (
                            <MusicVideo_Gallery music={mv} key={idx}/>
                        )
                    })
                }
            </> :
            <>
            {
                    artist_content?.videos?.map((mv,idx) => {
                        return (
                            <MusicVideo_Rows music={mv} key={idx}/>
                        )
                    })
                }
            </>
        }
    </div>
  )
}

export default OfficialMV