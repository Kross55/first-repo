import {
    addMessageBodyCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

let addStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,//state=store.getState()
        messages: state.dialogsPage.messages,
        answers: state.dialogsPage.answers,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    };
};

let addDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        addMessageBody: () => {
            dispatch(addMessageBodyCreator());
        }
    }
}

const DialogsContainer = connect (addStateToProps, addDispatchToProps) (Dialogs);

export default DialogsContainer;
