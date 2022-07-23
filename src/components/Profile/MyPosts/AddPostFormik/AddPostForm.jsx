import React from "react";
import { Field, Form, Formik } from "formik";

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
         onSubmit={submit}
        >
        { () => (
        <Form>
            <div>
                <Field 
                    as='textarea'
                    name='newPostBody'
                    placeholder='Yo! post here'
                />
            </div>
            <div>
                <button type={"submit"}>Add post</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default AddPostForm