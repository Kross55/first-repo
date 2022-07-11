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

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
