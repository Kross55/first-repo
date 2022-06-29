import { followAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setСurrentPageAC } from '../../redux/friendsReduser';
import Users from './Users';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setСurrentPage: (pageNumber) => {
            dispatch(setСurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;