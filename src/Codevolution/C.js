import React, { useContext } from 'react';
import {userContext, languageContext} from '../App'


const C = () => {
    const user = useContext(userContext);
    const language = useContext(languageContext);
    return ( 
        <div>
            <h3>Hello 👋, from component C</h3>
            {user} speaks {language}

        </div>
     );
}
 
export default C; 