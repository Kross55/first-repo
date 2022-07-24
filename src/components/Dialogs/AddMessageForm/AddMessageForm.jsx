import React from "react";
import s from "./AddMessageForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { minMaxLengthCreator } from "../../common/validators/validators";
import * as Yup from "yup";

const validationSchemaAddMessage = Yup.object().shape( {
    newMessageBody: minMaxLengthCreator(5, 20).required("Required")
 } );

const AddMessageForm = (props) => {
    let submit = (values) => {
        props.addMessageBody(values.newMessageBody)
    }
    return (
        <Formik
         initialValues={{
           newMessageBody: "",
         }}
         validateOnBlur
         validationSchema={validationSchemaAddMessage}
         onSubmit={submit}
        >
        { ({isValid, handleSubmit, dirty}) => (
        <Form>
            <div>
                <Field 
                    as='textarea'
                    name='newMessageBody'
                    placeholder='text your message'
                />
                <ErrorMessage className={s.error} name='newMessageBody' component="div" />
            </div>
            <div>
                <button 
                    className={s.button}
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={"submit"}>Send</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default AddMessageForm