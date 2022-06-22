import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AnswerItem from "./AnswerItem/AnswerItem";

const Dialogs = (props) => {
    debugger;
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
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='text your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
            <div className={s.answers}>
                { answersElements }
            </div>
        </div>
    );
};

export default Dialogs;
