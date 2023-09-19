import React from 'react'
import OfficialMV from './OfficialMV'
import Playlist from './Playlist'
import Album from './Album'
import OtherV from './OtherV'

const TabContent = ({current_tab,artist_content,tab_view}) => {
 switch(current_tab) {
    case 'official-mv' :
        return <OfficialMV artist_content={artist_content} tab_view={tab_view} />
    case 'playlist-by-artist':
        return <Playlist artist_content={artist_content} />
    case 'albums-by-artist' :
        return <Album artist_content={artist_content} />
    case 'other-videos' :
        return <OtherV artist_content={artist_content} />
 }
}

export default TabContent