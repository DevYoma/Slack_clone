import React from 'react';
import './Message.css';

const Message = ({ message, timestamp, user, userImage }) => {
    return ( 
        <div className="message">
            <img src={userImage} alt="Image"/>
            <div className="message__info">
                <h4>
                    {user}  <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                    <p>{message}</p>
                </h4>
            </div>
        </div>
     );
}
 
export default Message;