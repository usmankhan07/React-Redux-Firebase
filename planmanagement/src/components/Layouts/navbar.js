import React from 'react';
import {Link} from 'react-router-dom';
import SignIn from './signinLinks';
import SignOut from './signoutLinks';

const Navbar = () => {
return(
        <nav className = "nav-wrapper grey darken-3">
            <div class="container">
                <Link to="/" class="brand-logo">EPlan</Link>
                <SignIn/>
                <SignOut/>
            </div>
        </nav>
);
}

export default Navbar;
