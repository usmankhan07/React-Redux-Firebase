import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOut =()=> {
return(
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to = "/">SignUp</NavLink></li>
            <li><NavLink to = "/">Log In</NavLink></li>
        </ul>
);
}

export default SignOut;