import React from 'react';
import ProjectSummary from '../Project/projectsummary';

const ProjectList =({projects}) => {
    const projectslists = projects && projects.map(project => {
        return (
            <div>
                <ProjectSummary project = {project} key = {project.id}/>
            </div>
        );
    })

    return(
        <div className = "project-list section">
            {projectslists}
        </div>
    );
}

export default ProjectList;