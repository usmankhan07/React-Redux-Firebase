import React from 'react';
import {Link} from 'react-router-dom';
import ProjectSummary from '../Project/projectsummary';

const ProjectList =() => {
    return(

        <div className = "project-list section">
            <Link to = "/projectsummary">
            <ProjectSummary/>
            </Link>
            <Link to = "/projectsummary">
            <ProjectSummary/>
            </Link>
            <Link to = "/projectsummary">
            <ProjectSummary/>
            </Link>
            <Link to = "/projectsummary">
            <ProjectSummary/>
            </Link>
        </div>
    );
}

export default ProjectList;