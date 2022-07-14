import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    state = {
      isAuth: this.props.isAuth
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.isAuth !== this.props.isAuth) {
        this.setState({ isAuth: this.props.isAuth })
      }
    }
    render() {
      if (!this.props.isAuth) {
        return <Navigate to='/login' />
      }
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}