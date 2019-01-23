import React from 'react';
import {Link} from 'react-router-dom';

const Notifications = () => {
    return(
        <div className = "notifications">
           <div class="row">
                <div class="col s12 m6">
                    <div class="card white darken-1">
                        <div class="card-content black-text">
                            <span class="card-title">Notifications</span>
                            <p>Therw will be notifications</p>
                        </div>
                        <div class="card-action">
                            <Link to="/">About</Link>
                            <Link to="/">Name</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;