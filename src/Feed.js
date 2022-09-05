import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';

function Feed() {
  return (
    <div className="feed">
    
        <div className="feed_input_container">

            <div className="feed_input">

                <CreateIcon></CreateIcon>

                <form>
                    <input type="text"></input>
                    <button type="submit">Send</button>
                </form>
            </div>

            <div class="feed_input_options"> 

                <InputOption Icon={ImageIcon} title="Photo" color="70B5F9"></InputOption>
                <InputOption Icon={YouTubeIcon} title="Video" color="E7A33E"></InputOption>
                <InputOption Icon={EventIcon} title="Event" color="C0CBCD"></InputOption>
            </div>

        </div>

    </div>
  )
}

export default Feed