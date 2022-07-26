import Header from './Header';
import { logout } from './../../redux/auth-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect( mapStateToProps, { logout }) (Header);
