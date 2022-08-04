import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { minMaxLengthCreator } from '../common/validators/validators';

const createField = (name, type, placeholder, errorName) => {
  return (
    <div>
      <div>
        <Field name={name} type={type} placeholder={placeholder} />
      </div>
      <ErrorMessage name={errorName} component="div" />
    </div>
  );
};

const validateLoginForm = values => {
   const errors = {};
   if (!values.email) {
      errors.email = 'Required 1';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;
};

const validationSchemaLoginForm = Yup.object().shape( {
   name: Yup.string().typeError("Должно быть строкой").required("Обязательно 1"),
   secondName: Yup.string().typeError("Должно быть строкой").required("Обязательно 2"),
   password: minMaxLengthCreator(3, 12).required( "Required 2" ),
   confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Пароли не совпадают").required("Обязательно 3"),
   email: Yup.string().email("введите верный email"),
   confirmEmail: Yup.string().oneOf([Yup.ref("email")], "Email не совпадают").required("Обязательно 4")
} );


const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to='/profile' />//если залогинены, по перенаправляем на страницу профиля
  }
  return (
    <div>
      <h2> ... Login 555 </h2>

      <Formik
        initialValues={{
          name: "",
          secondName: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
          rememberMe: false,
        }}
        validate={validateLoginForm}
        validateOnBlur
        validationSchema={validationSchemaLoginForm}
        
        onSubmit={(values, { setSubmitting, setStatus }) => {
          props.login(values.email, values.password, values.rememberMe, setStatus);// передаём в BLL эти параметры из локального стейта Formik
          setSubmitting(false);
        }}
      >
        {({ isValid, handleSubmit, dirty, status }) => (
          <Form >

            <label htmlFor="name">Имя</label>
            <br />
            {createField("name", "text", "Stepan", "name")}

            <label htmlFor="secondName">Фамилия</label>
            <br />
            {createField("secondName", "text", "Bandera", "secondName")}

            {createField("email", "text", "e-mail", "email")}

            {createField("confirmEmail", "text", "confirm e-mail", "confirmEmail")}

            {createField("password", "password", "password", "password")}

            {createField("confirmPassword", "password", "confirm password", "confirmPassword")}

            <div>{status}</div>
            
            <div>
              <Field name={"rememberMe"} type={"checkbox"} id="rememberMe" />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>

            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div>...</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect ( mapStateToProps, {login}) (Login);