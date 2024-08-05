import React from 'react';
import './Feed.css';
import PostBox from './PostBox';
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      {/*Header* above the Post Box and Post components*/}
      <div className='feed__header'>
        <h1>home</h1>
      </div>
      <PostBox/>
      <Post/>
      {/*Link to the official x.com webpage*/}
      <div className='Link__container'><a className='link' href="https://www.x.com">X.com</a></div>
    </div>
  )
}

export default Feed;
