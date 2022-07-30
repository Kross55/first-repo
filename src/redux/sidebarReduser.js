let initialeState = {
    friends: [
        {id: 1, friend: 'Leo'},
        {id: 2, friend: 'Dony'},
        {id: 3, friend: 'Raf'},
        {id: 4, friend: 'April'},
    ]
};

const sidebarReducer = (state = initialeState, action) => {
    return state;
};

export default sidebarReducer;