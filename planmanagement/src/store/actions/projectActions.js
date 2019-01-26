export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make some async call here.
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            userFirstName:"Ahmed",
            userLastName:"Khan",
            userid:123,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type:'CREATE_PROJECT', project:project});
        }).catch((err) => {
            dispatch({type:"CREATE_PROJECT_ERROR", err})
        })

    }
}

