import {addMessageBody} from "../../redux/dialogsReduser";
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

export default compose(
    connect (mapStateToProps, {addMessageBody}),
    withAuthRedirect
)(Dialogs)
