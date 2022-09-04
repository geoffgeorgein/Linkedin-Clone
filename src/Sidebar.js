import React from 'react'
import Avatar from '@mui/material/Avatar';


function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebar_top">

            <Avatar className="sidebar_avatar"></Avatar>
            <h2>Geoff George</h2>

        </div>

        <div className="sidebar_stats">

            <div lclassName="sidebar_stat">

                    <p> Who viewed you</p>
                    <p className='sidebar_statnum'> 290</p>
            </div>

            <div lclassName="sidebar_stat">

                    <p> Who viewed your posts</p>
                    <p className='sidebar_statnum'> 7350</p>
            </div>

        </div>

    
    </div>
  )
}

export default Sidebar