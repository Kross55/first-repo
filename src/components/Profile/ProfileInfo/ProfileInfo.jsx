import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg"/>
            </div>
            <div className={s.profileView}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
