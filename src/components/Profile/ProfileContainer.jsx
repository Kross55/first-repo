import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReduser";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()}
     return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userIdNew;
    if (!userId) {
      userId = 2
      }
      this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
