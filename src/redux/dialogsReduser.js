const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageBody,
        };
        state.messages.push(newMessage);
        state.newMessageBody = '';
    }
    return state;
};

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const addMessageBodyCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;