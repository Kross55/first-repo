import React from "react";
import { Field, Form, Formik } from "formik";

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
         onSubmit={submit}
        >
        { () => (
        <Form>
            <div>
                <Field 
                    as='textarea'
                    name='newMessageBody'
                    placeholder='text your message'
                />
            </div>
            <div>
                <button type={"submit"}>Send</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default AddMessageForm