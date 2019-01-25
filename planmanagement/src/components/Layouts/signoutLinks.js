import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLink =()=> {
return(
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to = "/signup">SignUp</NavLink></li>
            <li><NavLink to = "/signin">Log In</NavLink></li>
        </ul>
);
}

export default SignOutLink;