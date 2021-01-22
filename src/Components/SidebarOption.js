import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../Firebase/Firebase';
import './SidebarOption.css';

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
// we want to use this to force a REDIRECT 🙂
    const history = useHistory();

    const selectChannel = () => {
//id in the sense that its coming from the database(so this is a really good and complex use of props passing)
        if (id){
            history.push(`/room/${id}`)
        }
        else{
            history.push(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please Enter the channel Name");
        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    return ( 
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon  className="sidebarOption__icon"/>}
            {Icon ? ( <h3>{title}</h3>) :
             (<h3 className="sidebarOption__channel">
                #<span className="sidebarOption__hash">{title}</span>
            </h3>)}
        </div>
     );
}
 
export default SidebarOption;