import { followAC, setUsersAC, unfollowAC } from '../../redux/friendsReduser';
import Users from './Users';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;