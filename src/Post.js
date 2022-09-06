import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';



function Post({name,description,message,photoUrl}) {

 

  return (
    <div className="post">

        <div className='post_header'>
        <Avatar></Avatar>

            <div className="post_info">

                <h2> {name}</h2>
                <p> {description}</p>
            </div>

            
        </div>
        <div className='post_body'>

                <p> {message}</p>
        </div>

        <div className="post_buttons">

            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"></InputOption>
            <InputOption Icon={InsertCommentIcon} title="Comment" color="gray"></InputOption>
            <InputOption Icon={ShareIcon } title="Share" color="gray"></InputOption>
            <InputOption Icon={SendIcon} title="Send" color="gray"></InputOption>

        </div>

    </div>
  )
}

export default Post
