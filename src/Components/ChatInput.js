import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatInput.css';
import db from '../Firebase/Firebase';
import { useStateValue } from '../Context/StateProvider';
import firebase from 'firebase';


const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState("");
    const [{user}] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault();

        // adding messages through the input component
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
        
    }

    return ( 
        <div className="chatInput">
            {/* form to have the enter submit behaviour */}
            <form>
                <input 
                    type="text" 
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
     );
}
 
export default ChatInput;