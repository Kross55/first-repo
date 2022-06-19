import React from "react";
import s from "./FriendItem.module.css";


const FriendItem = (props) => {
    return (
        <div>
            <div className={s.friend}>
                {props.friend}
            </div>
        </div>
    )
}


export default FriendItem;