import React from 'react';
import {Link} from 'react-router-dom';
import ProjectSummary from '../Project/projectsummary';

const ProjectList =() => {
    return(

        <div className = "project-list section">
            <Link to = "/project/:id">
            <ProjectSummary/>
            </Link>
            <Link to = "/">
            <ProjectSummary/>
            </Link>
            <Link to = "/">
            <ProjectSummary/>
            </Link>
            <Link to = "/">
            <ProjectSummary/>
            </Link>
        </div>
    );
}

export default ProjectList;