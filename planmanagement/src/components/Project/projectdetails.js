import React from 'react'

const  ProjectDetails= (props) => {
    const id = props.match.params.id;
    console.log(id);
    return (
    <div className = "container section project-details">
        <div className = "card z-depth-0">
            <div  className = "card-content">
                <span className = "card-title">Project title-{id}</span>
                <p>khfdjfkhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
            </div>
            <div className = "card-action gret lighten-4 grey-text">
                <div>Posted by Usman Khan</div>
                <div> 23 January, 2018</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails



