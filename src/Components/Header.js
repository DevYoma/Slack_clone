import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon  from '@material-ui/icons/Help';
import { useStateValue } from '../Context/StateProvider';

const Header = () => {
    // i am not dispatching any action into the reducer
    const [{user}] = useStateValue();
    
    return ( 
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search Clever programmer"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
     );
}
 
export default Header;