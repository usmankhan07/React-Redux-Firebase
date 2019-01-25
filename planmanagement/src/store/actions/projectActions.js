export const createProject = (project) => {
    return (dispatch, getState) => {
        // make some async call here.
        dispatch({type:'CREATE_PROJECT', project:project});
    }
}

