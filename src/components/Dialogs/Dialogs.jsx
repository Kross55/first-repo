import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AnswerItem from "./AnswerItem/AnswerItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.messages.map( m => <MessageItem message={m.message}/>);
    let answersElements =
        props.answers.map( a => <AnswerItem answer={a.answer}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <AddMessageForm addMessageBody={props.addMessageBody}/>
            </div>
            <div className={s.answers}>
                { answersElements }
            </div>
        </div>
    );
};

export default Dialogs;
