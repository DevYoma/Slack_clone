import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/Book';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Product Mafia</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        DevYoma
                    </h3>
                </div>
                <CreateIcon />
            </div>
                {/* passing an icon as props. */}
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mention & Reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="Files" />
                <SidebarOption Icon={ExpandLessIcon} title="ShowLess" />
                <hr/>
                <SidebarOption Icon={ExpandMoreIcon} title="ShowMore" />
                <hr/>
                <SidebarOption Icon={AddIcon} title="Add Channel" />

                {/* Connect to DB and list all the channels */}
        </div>
     );
}
 
export default Sidebar;