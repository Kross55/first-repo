import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import smile from '../../../assets/images/smile.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
       return <Preloader />
    }
    return (
        <div>
            {/*<div className={s.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg"/>
            </div>*/}
            <div className={s.profileView}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status='Kross55  rules'/>
                <div className={s.smile}>Ищу работу: {props.profile.lookingForAJob ? <img src={smile}/> : null}</div>
                <div>Описание: {props.profile.lookingForAJobDescription}</div>
                <div>Мои контакты:</div>
                <div>
                    <div><a href='' >{props.profile.contacts.facebook}</a></div>
                    <div><a href='' >{props.profile.contacts.vk}</a></div>
                    <div><a href='' >{props.profile.contacts.twitter}</a></div>
                    <div><a href='' >{props.profile.contacts.instagram}</a></div>
                    <div><a href='' >{props.profile.contacts.github}</a></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
