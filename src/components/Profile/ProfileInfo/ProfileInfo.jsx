import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import smile from '../../../assets/images/smile.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    //используем локальный стейт для editMode
    let [editMode, setEditMode] = useState(false)

    //переменная для изменения editMode
    const activateEditMode = () => {
        setEditMode(true)
    }

    if(!props.profile){
       return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
      //проверка массива с файлами на количество объектов/на его длиинну
      if(e.target.files.length){ 
        //диспатчим санку, передаём выбранное фото на сервер, и сохраняем его в state.profile
        props.savePhoto(e.target.files[0])
      }
    }
    
    //логика, выполняемая при нажатии на кнопку
    const onSubmit = (formData, { setSubmitting, setStatus }) => {
        //диспатчим санку изменения профиля и отображаем серверную ошибку внутри Formik
        props.saveProfile(formData, setStatus)
        setSubmitting(false)
        //выходим из компоненты редактирования на компоненту отображения профиля
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.profileView}>
                {/*отображаем фото из сервера или загруженную нами картинку*/}
                <img src={props.profile.photos.large || userPhoto}/>

                {/*отображаем поле input только у владельца профиля,
                фото других юзеров менять нельзя*/}
                {props.isOwner && <input 
                                    type={"file"} 
                                    onChange={onMainPhotoSelected}/>}
                                    {/*добавляем onChange чтобы можно было менять наше фото*/ }
                
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus} />
                
                { editMode
                    //компонента для формы Formic где мы будем заполнять наши данные и отсылать на сервер
                    ? <ProfileDataForm 
                        profile={props.profile} 
                        initialValues={props.profile}
                        onSubmit={onSubmit}
                        />
                    //компонент с нашими данными которые мы будем получать из сервера
                    : <ProfileData 
                        profile={props.profile} 
                        isOwner={props.isOwner}
                        /*можно обойтись и без переменной activateEditMode, 
                        прописать activateEditMode={ () => {setEditMode(true)} }*/
                        activateEditMode={activateEditMode}/>} 

            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.activateEditMode}>Edit</button></div>}{/*кнопка для переключения между компонентами отображения данных и заполнения данных*/}
            <div>
                <b>Full name</b>: {props.profile.fullName}
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
                {/*Object.keys необходим для обработки объекта contacts из нашего профиля, который мы будем мапить,
                данные которые мы вытягиваем, отображаем в виде компонент <Contacts/>!*/}
                <b>My contacts</b>: 
                    {Object.keys(props.profile.contacts).map(key =>   
                        <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key] || "empty"} />
                )}
            </div>
        </div>
    )
}

//создали компоненту Contacts для использования выше в ProfileData
const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts} ><b>{contactTitle}</b>: {contactValue}</div>  
}

export default ProfileInfo
