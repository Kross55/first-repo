import { connect } from 'react-redux';
import Nav from "./Nav";

let addStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

const NavContainer = connect (addStateToProps) (Nav);

export default NavContainer;
