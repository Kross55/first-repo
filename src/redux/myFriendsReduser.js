const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialeState = {
    users: [
        {
            id: 1, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg',
            followed: true, fullName: 'Ivan', status: 'I am a boss', location: { country: 'Ukraine', city: 'Odesa' }
        },//u
        {
            id: 2, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg',
            followed: true, fullName: 'Slava', status: 'I am a boss too', location: { country: 'Ukraine', city: 'Sarata' }
        },//u
        {
            id: 3, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg',
            followed: false, fullName: 'Igor', status: 'I am a boss too', location: { country: 'Ukraine', city: 'Vinnica' }
        },//u
    ]
};

const usersReducer = (state = initialeState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {//{ (u.id === action.userId) ? {...u, followed: false} : u })
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });//users: users === users

export default usersReducer;