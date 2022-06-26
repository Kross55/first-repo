import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendItem from "./Friends/FriendItem";

const Nav = (props) => {
    debugger;
    let friendsElements =
        props.friends.map ( f => <FriendItem friend={f.friend} />);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div>
                    <NavLink to='/profile' 
                        className={n => n.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs'
                        className={n => n.isActive ? s.active : s.item}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to='/news' 
                        className={n => n.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' 
                        className={n => n.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings'
                        className={n => n.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to='/friends'
                        className={n => n.isActive ? s.active : s.item}>Friends</NavLink>
                </div>
            </div>
            <div>
              <div>
                My friends:
                </div>
                <div className={s.list}>
                    { friendsElements }
                </div>
            </div>
        </nav>
    );
};

export default Nav;
