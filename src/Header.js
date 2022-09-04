import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";


function Header() {
  return (
    <div className="header">
    
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>

        </div>

        <div className="header_search">

            <SearchIcon></SearchIcon>
            <input type="text">

            </input>
            
        </div>

        <div className="header_right">

                
        </div>
    </div>
        )
}

export default Header