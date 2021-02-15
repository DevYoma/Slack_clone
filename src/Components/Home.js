import React from 'react';
import './Home.css';
import Slack from '../assets/slack.png';

const Home = () => {
    return ( 
        <div className="home">
            <div className="home__header">
                <img src={Slack} alt="slack-img"/>
                <p className="home__p">HI, I'm Yoma, I am a React Developer and a Web developer Enthusiast.</p>
                <p className="home__welcome__p">Welcome to my Slack Clone</p>
            </div>
            <div className="home__instructions">
                <h3>How it works</h3>
                <li>When you sign in with gmail, click on the Add Channel button</li>
                <li>You can also choose to just join any Channel Already created</li>
                <li>You can now have fun chatting on the group. Cheers 😁</li>
            </div>

        </div>
     );
}
 
export default Home;