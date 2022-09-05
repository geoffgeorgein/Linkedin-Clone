import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';

function Post({name,description,message,photoUrl}) {
  return (
    <div className="post">

        <div className='post_header'>
        <Avatar></Avatar>

            <div className="post_info">

                <h2> Geoff George</h2>
                <p> desc</p>
            </div>

            <div className='post_body'>

                <p></p>
            </div>
        </div>

    </div>
  )
}

export default Post
