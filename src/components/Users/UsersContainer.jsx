import React from 'react';
import {connect} from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleIsFetching, toggleFollowingInProgress, getUsers } from '../../redux/myFriendsReduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getStateUsers, getCurrentPage, getPageSize, getTotalUsersCount, getIsFetching, getFollowingInProgress } from '../../redux/myFriends-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          follow={this.props.follow}
          unfollow={this.props.unfollow} s
          followingInProgress={this.props.followingInProgress}//прокидываем props из UsersContainer в Users
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        users: getStateUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, 
    toggleIsFetching, toggleFollowingInProgress, getUsers}),
  withAuthRedirect
  )(UsersContainer)