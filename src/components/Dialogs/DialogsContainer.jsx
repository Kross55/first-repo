import {
    addMessageBodyCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs, //state=store.getState()
        messages: state.dialogsPage.messages,
        answers: state.dialogsPage.answers, 
        newMessageBody: state.dialogsPage.newMessageBody
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        addMessageBody: () => {
            dispatch(addMessageBodyCreator());
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
