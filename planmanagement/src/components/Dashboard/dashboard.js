import React, {Component} from 'react';
import Notifications from './notifications';
import ProjectList from './projectList';
import {connect} from 'react-redux';


class Dashboard extends Component {
    render() {
        const {projects} = this.props;
        return(
            <div className = "dashboard container">
                <div className = "row">
                    <div className = "col s12 m6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className = "col s12 m6 ">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        projects:state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);