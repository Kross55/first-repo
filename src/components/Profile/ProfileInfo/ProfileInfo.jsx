import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import smile from '../../../assets/images/smile.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)//используем локальный стейт для editMode

    const activateEditMode = () => {//переменная для изменения editMode
        setEditMode(true)
    }

    if(!props.profile){
       return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
      if(e.target.files.length){          //проверка массива с файлами на количество объектов/на его длиинну
        props.savePhoto(e.target.files[0])//диспатчим санку, передаём выбранное фото на сервер, и сохраняем его в state.profile
      }
    }

    return (
        <div>
            {/*<div className={s.item}>
                <img src="https://mobimg.b-cdn.net/v3/fetch/70/708698fd251a43214d6198c0c6438156.jpeg"/>
            </div>*/}
            <div className={s.profileView}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}{/*добавляем onChange чтобы можно было менять наше фото*/ }
                
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus} />
                
                { editMode 
                   ? <ProfileDataForm profile={props.profile}/> //компонента для формы Formic где мы будем заполнять наши данные и отсылать на сервер
                   : <ProfileData //компонент с нашими данными которые мы будем получать из сервера
                        profile={props.profile} 
                        isOwner={props.isOwner}
                        activateEditMode={activateEditMode}/>}{/*можно обойтись и без переменной, прописать activateEditMode={ () => {setEditMode(true)} }*/} 

            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.activateEditMode}>Edit</button></div>}{/*кнопка для переключения между компонентами отображения данных и заполнения данных*/}
            <div>
                <b>Name</b>: {props.profile.fullName}
            </div>
            <div className={s.smile}>
                <b>Lookig for a JOB</b>: {props.profile.lookingForAJob ? 'In active search' : <img src={smile} />}
            </div>
            {(props.profile.lookingForAJob &&
                <div>
                    <b>My profetional skills</b>: {props.profile.lookingForAJobDescription}
                </div>) ||
                <div>
                    <b>Description</b>: I am playing with search!
                </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>My contacts</b>: {Object.keys(props.profile.contacts).map(key =>  //Object.keys появился для обработки объекта contacts из нашего профиля, который мы будем мапить! 
                    <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key] || "empty"} />
                )}
            </div>
            {/*
            <div className={s.contacts}>  // это я доставал каждое значение ключа объекта contacts отдельно и отображал их в виде ссылок
                <div><a href='' >{props.profile.contacts.facebook || <div>facebook.com</div> }</a></div>
                <div><a href='' >{props.profile.contacts.twitter || <div>twitter.com</div> }</a></div>
                <div><a href='' >{props.profile.contacts.instagram || <div>instagram.com</div> }</a></div>
                <div><a href='' >{props.profile.contacts.github || <div>github.com</div> }</a></div>
            </div>
            */}
        </div>
    )
}
const ProfileDataForm = (props) => {
    return (
        <div>Formic</div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts} ><b>{contactTitle}</b>: {contactValue}</div>  
}

export default ProfileInfo
