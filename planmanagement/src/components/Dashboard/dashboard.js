import React, {Component} from 'react';
import Notifications from './notifications';
import ProjectList from './projectList';


class Dashboard extends Component {
    render() {
        return(
            <div className = "dashboard container">
                <div className = "row">
                    <div className = "col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className = "col s12 m6 ">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;