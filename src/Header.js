import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HeaderOption from "./Headeroption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">
    
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>

            <div className="header_search">

            <SearchIcon></SearchIcon>
            <input type="text">

            </input>
            
        </div>

        </div>

        

        <div className="header_right">

            <HeaderOption title="Home" Icon={HomeIcon}></HeaderOption>
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon}></HeaderOption>  
            <HeaderOption title="Chat" Icon={ChatIcon}></HeaderOption>  
            <HeaderOption title="Business" Icon={BusinessCenterIcon}></HeaderOption>  
            <HeaderOption title="Notifications" Icon={NotificationsIcon}></HeaderOption>  
            <HeaderOption title="Me" avatar="https://wallpaperset.com/w/full/f/5/2/302684.jpg"></HeaderOption>  
        </div>
    </div>
        )
}

export default Header