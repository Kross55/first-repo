import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if(!props.profile){
       return <Preloader />
    }
    return (
        <div>
            <div className={s.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg"/>
            </div>
            <div className={s.profileView}>
                <img src={props.profile.photos.large}/>
                ava + description   
            </div>
        </div>
    );
};

export default ProfileInfo;
