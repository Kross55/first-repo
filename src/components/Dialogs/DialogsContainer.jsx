import React from "react";
import {
    addMessageBodyCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onNewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    };

    let onSendMessageClick = () => {
        props.dispatch(addMessageBodyCreator());
    };
    
    return <Dialogs
        dialogs={state.dialogs}
        messages={state.messages}
        answers={state.answers}
        newMessageBody={state.newMessageBody}
        updateNewMessageBody={onNewMessageChange}
        addMessageBody={onSendMessageClick}
    />
};

export default DialogsContainer;
