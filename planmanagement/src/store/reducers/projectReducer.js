const initState = {
    projects:[
        {id:1, title:"ali", content:"jlfdjlllllllllfljdskljog4"},
        {id:2, title:"ahmed", content:"jlfdjlllllllllfljds93284f"},
        {id:3, title:"usman", content:"jlfdjllldkjdskdllllllfljd"},
        {id:4, title:"khan", content:"jlfdjlllllllllfsdhsdhsljd"}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Project is created", action.project);
    }
    return state;
}

export default projectReducer;