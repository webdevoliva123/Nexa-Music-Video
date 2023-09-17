import React from 'react'
import OfficialMV from './OfficialMV'

const TabContent = ({current_tab,artist_content,tab_view}) => {
 switch(current_tab) {
    case 'official-mv' :
        return <OfficialMV artist_content={artist_content} tab_view={tab_view} />
 }
}

export default TabContent