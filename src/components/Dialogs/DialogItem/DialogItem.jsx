import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path;
    path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={a => a.isActive ? s.active : s.dialog}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg" />
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
