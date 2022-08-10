import React from 'react';
import s from "./ProfileInfo.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { minMaxLengthCreator } from '../../common/validators/validators';

const validationSchemaProfileDataForm = Yup.object().shape( {
  aboutMe: minMaxLengthCreator(0, 50).required("Required"),
  fullName: Yup.string().typeError("Должно быть строкой").required("Required"),
} );

const ProfileDataForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validateOnBlur
        validationSchema={validationSchemaProfileDataForm}
        //получаем необходимую логику для изменения профиля из ProfileInfo через пропсы
        onSubmit={props.onSubmit}
      >
        {({ isValid, handleSubmit, dirty, status }) => (
          <Form >
            
            <label htmlFor="aboutMe"><b>About me:</b></label>
            <br />
            <div>
              <div>
                <Field as="textarea" name="aboutMe" placeholder="Some words about myself" />
              </div>
              <ErrorMessage name="aboutMe" component="div" />
            </div>

            <label htmlFor="fullName"><b>Full name:</b></label>
            <br />
            <div>
              <div>
                <Field name="fullName" type="text" placeholder="fullName" />
              </div>
              <ErrorMessage name="fullName" component="div" />
            </div>

            <div>
              <Field name="lookingForAJob" type="checkbox" id="lookingForAJob" />
              <label htmlFor="lookingForAJob"><b>Looking for a JOB</b></label>
            </div>

            <label htmlFor="lookingForAJobDescription"><b>My profissional skills:</b></label>
            <br />
            <div>
              <div>
                <Field name="lookingForAJobDescription" as="textarea" placeholder="My profissional skills" />
              </div>
              <ErrorMessage name="lookingForAJobDescription" component="div" />
            </div>

            <label htmlFor="contacts"><b>My contacts:</b></label>
            <br />
            <div> 
              {/*с помощью Object.keys будем мапить контакты из профиля,
              профиль прокидываем сюда через пропсы*/}
              {Object.keys(props.profile.contacts).map(key => {
                return (
                  <div key={key} className={s.contacts}>
                    <b>{key}:</b>
                    <div>
                      <Field name={"contacts." + key} type="text" />
                    </div>
                    <ErrorMessage name={key} component="div" />
                  </div>
                )
              })}  
            </div>
            
            {/*отображается серверная ошибка,
            если ввести невалидный адрес */}
            <div>{status}</div>
             
            <div>
              <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={"submit"}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileDataForm