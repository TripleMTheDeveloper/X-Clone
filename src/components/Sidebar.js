import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOptions';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import {Button} from '@material-ui/core';


{/*
This component is meant to represent the entire left side of the twitter HomeScreen where you should theoretically be able to navigate to different pages on the website.
I wasn't sure how to make the left side panel dynamic like the real twitter one where you can toggle it to show the icons only without the words.
I used Icons from Material UI.
*/}
function Sidebar(){

    return(
        <div className='sidebar'>
        {/*Sidebar Option*/}
        <XIcon className='sidebar__XIcon'/>
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Search"/>
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>

        <Button variant="outlined" className="sidebar__post">Post</Button>
        
        </div>
    );
}

export default Sidebar;