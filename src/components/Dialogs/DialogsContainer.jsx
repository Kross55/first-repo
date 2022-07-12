import {
    addMessageBodyCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,//state=store.getState()
        messages: state.dialogsPage.messages,
        answers: state.dialogsPage.answers,
        newMessageBody: state.dialogsPage.newMessageBody,
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

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
