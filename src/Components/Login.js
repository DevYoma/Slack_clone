import React from 'react';
import './Login.css';
import Slack from '../assets/slack.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../Firebase/Firebase';

const Login = () => {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return ( 
        <div className="login">
            <div className="login__container">
                <img src={Slack} alt="slack_logo"/>
                <h1>Sign in to Yoma</h1>
                <p>Lawrenceyoma.netlify.app</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
     );
}
 
export default Login;