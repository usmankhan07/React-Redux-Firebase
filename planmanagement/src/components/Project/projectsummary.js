import React from 'react';

const ProjectSummary =({project})=> {
    return(
        <div className = "projectsummary">
             <div class="row">
                <div class="col s12 m6">
                    <div class="card white darken-1">
                        <div class="card-content black-text">
                            <span class="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        {/* <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;