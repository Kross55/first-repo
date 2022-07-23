import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AnswerItem from "./AnswerItem/AnswerItem";
import { Field, Form, Formik } from "formik";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.messages.map( m => <MessageItem message={m.message}/>);
    let answersElements =
        props.answers.map( a => <AnswerItem answer={a.answer}/>);

    let newMessageBody = props.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    let onSendMessageClick = () => {
        props.addMessageBody();
    }

    let addNewMessage = () => {
        alert('sdsd')
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
            <div className={s.answers}>
                { answersElements }
            </div>
        </div>
    );
};



const AddMessageForm = (props) => {
    let submit = (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }
    return (
        <Formik
         initialValues={{
           newMessageBody: "",
         }}
         validateOnBlur
         onSubmit={submit}
        >
        { ({isSubmitting}) => (
        <Form>
            <div>
                <Field 
                    as='textarea'
                    name='newMessageBody'
                    placeholder='text your message'
                />
            </div>
            <div>
                <button type={"submit"} disabled={isSubmitting}>Send</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default Dialogs;
