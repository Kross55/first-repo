import React from "react";
import s from "./AddPostForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { minMaxLengthCreator } from "../../../common/validators/validators";

const validationSchemaAddPost = Yup.object().shape( {
    newPostBody: minMaxLengthCreator(0, 15).required("Required")
 } );

const AddPostForm = (props) => {
    let submit = (values) => {
        props.addPost(values.newPostBody)
    }
    return (
        <Formik
         initialValues={{
            newPostBody: "",
         }}
         validateOnBlur
         validationSchema={validationSchemaAddPost}
         onSubmit={submit}
        >
        { ({isValid, handleSubmit, dirty}) => (
        <Form>
            <div>
                <Field 
                    as='textarea'
                    name='newPostBody'
                    placeholder='Yo! post here'
                />
                <ErrorMessage className={s.error} name='newPostBody' component="div" />
            </div>
            <div>
                <button 
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={"submit"}>Add post</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default AddPostForm