import React from 'react';
import {NavLink} from 'react-router-dom';

const SignIn =()=> {
return(
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink to="/">New Plan</NavLink></li>
        <li><NavLink to="/">Log Out</NavLink></li>
        <li><NavLink to = '/' className = 'btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
);
}

export default SignIn;