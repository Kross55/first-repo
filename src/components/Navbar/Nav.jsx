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
            <div>
                <div className={s.item}>
                    <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
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
