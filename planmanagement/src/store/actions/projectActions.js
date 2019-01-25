export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make some async call here.
        dispatch({type:'CREATE_PROJECT', project:project});
    }
}

