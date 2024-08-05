import React from 'react';
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

{/*
This component is meant to represent posts you would see on a real twitter timeline.
We have imported icons from material ui to help recreate the look and feel of twitter.
We also take in a number of arguments, as props for our post function in order to help us define the properties we need for the function.
*/}
function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    img,
    postProfile
}) {
  return (
    <div className='post'>
      <div className='postProfile'>
        <img src='headshot-1024x683.jpg' alt='Profile'/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
            <div className='header__text'>
               <h3>
                Wendy @WendyDeveloper<span>
                <VerifiedIcon className='post__badge'/></span>
                </h3> 
            </div>
            <div className='post__headerDescription'>
                <p>New Profile Pic!</p>
            </div>
            <img src='headshot-1024x683.jpg' alt="post media" className='profile__photo' />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
      </div>
    </div>
   </div>
);
}

export default Post;
