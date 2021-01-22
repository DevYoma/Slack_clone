import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import db from '../Firebase/Firebase';
import Message from './Message';
import Image from '../assets/portfolioImage.jpg';


const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    
    useEffect(() => {
        if (roomId) {
            // this looks for the id of the document in the document tree(collection > document);
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        // this is to get the messages from the particular room(this is so sleek 🆒) when the room is being clicked or loaded (so so so sleek...)
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(
            // setting the roomMessages
            (snapshot) => setRoomMessages(snapshot.docs.map(doc => doc.data()))
        )

    }, [roomId]);
    // why is the dependency in an array format
    
    // console.log(roomDetails)
    console.log("MESSAGES >>>>>>", roomMessages);

    return ( 
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* optional chaining to stay safe */}
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>

            {/* CHAT MESSAGES */}
            <div className="chat__messages">
                {/* <Message /> */}
                {roomMessages.map(({message, timestamp, user, userImage}) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={Image}
                    />
                ))}
            </div>

        </div>
     );
}
 
export default Chat;