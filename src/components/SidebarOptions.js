import React from 'react';
import './SidebarOption.css';

{/*
Here we are rending a sidebar option with an iccon and text, so this component renders the individual sidebar options for the Sidebar.js component.
*/}
function SidebarOption({active, text, Icon}) {
    return(
        <div className={`sidebarOption ${active && 'sidebarOption--active' }`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;