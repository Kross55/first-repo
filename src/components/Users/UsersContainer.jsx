import React from 'react';
import {connect} from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleIsFetching, toggleFollowingInProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/myFriendsReduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersApi } from './../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersApi.getUser(pageNumber, this.props.pageSize).then( data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          /*follow={this.props.follow}
          unfollow={this.props.unfollow}*/ 
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followingInProgress={this.props.followingInProgress}//прокидываем props из UsersContainer в Users
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers,
  setCurrentPage, setTotalUsersCount, 
  toggleIsFetching, toggleFollowingInProgress, getUsers: getUsersThunkCreator,
  followThunkCreator, unfollowThunkCreator
})(UsersContainer);