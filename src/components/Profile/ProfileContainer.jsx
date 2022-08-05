import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../redux/profileReduser";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()}
     return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {

  updateProfile() {
    let userId = this.props.match.params.userIdNew;
    if (!userId) {
      userId = this.props.authorizedUserId
      }
      if (!userId) {
        this.props.history.push('/login')
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
  }

  componentDidMount() {//монтируется единожды и при изменении пропсов ничего не перерисовывает
    this.updateProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {//добавляем для обновления профиля, т.к. приходят новые пропсы
    if(this.props.match.params.userIdNew !== prevProps.match.params.userIdNew){//условие для обновления компоненты, чтобы не уходила в зацикленность
      this.updateProfile()
    }
  }
  

  render() {
    return <Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      isOwner={!this.props.match.params.userIdNew}
      savePhoto={this.props.savePhoto} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
