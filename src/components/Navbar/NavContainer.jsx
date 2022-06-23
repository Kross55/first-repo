import { connect } from "react-redux";
import Nav from "./Nav";

const addStateToProps = (state) => {
    return{
        friends: state.sidebar.friends
    }
};

const NavContainer = connect (addStateToProps) (Nav);

export default NavContainer;
