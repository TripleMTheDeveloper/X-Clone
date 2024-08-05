import React from 'react';
import './PostBox.css';
import {Button} from '@material-ui/core';


{/*
This component is meant to represent the post box where you write your tweets on the real twitter page.
I used some JSX elements with different classes in order to represent the different parts of the Post Box.
Then styled is in CSS.
*/}

function PostBox() {
  return (
    <div className='postBox'>
        <form>
            <div className='postBox__input'>
                <img src='TrxpleM.jpg' alt="Profile"/>
                <input placeholder="What's happening?" type='text'/>
            </div>
            <input className='postBox__imageInput' placeholder='Enter Image URL' type='text'/>

            <Button className='postBox__postButton'>Post</Button>
        </form>
    </div>
  )
}

export default PostBox;
