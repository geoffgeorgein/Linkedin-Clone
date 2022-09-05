import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./sidebar.css";


function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebar_top">

            <img src="https://timelinecovers.pro/facebook-cover/download/abstract_blue_and_black_pixels-facebook-cover.jpg" alt=""></img>
            <Avatar className="sidebar_avatar"></Avatar>
            <h2>Geoff George</h2>

            <div className="sidebar_stats">

                <div className="sidebar_stat">

                        <p> Who viewed you</p>
                        <p className='sidebar_statnum'> 290</p>
                </div>

                <div className="sidebar_stat">

                        <p> Who viewed your posts </p>
                        <p className='sidebar_statnum'> 7350</p>
                </div>

            </div>



        </div>

        <div className="sidebar_bottom">


        </div>

        

    
    </div>
  )
}

export default Sidebar