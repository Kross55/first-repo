const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialeState = {
        dialogs: [
            {id: 1, name: 'Leo'},
            {id: 2, name: 'Dony'},
            {id: 3, name: 'Miky'},
            {id: 4, name: 'Raf'},
            {id: 5, name: 'Splinter'},
            {id: 6, name: 'April'},
            {id: 7, name: 'Shreder'},
        ],
        messages: [
            {id: 1, message: 'Hi everyone'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'What am i doing here?'},
            {id: 4, message: 'Yok'},
            {id: 5, message: 'Hey'},
        ],
        newMessageBody: 'dialogs',
        answers: [
            {id: 1, answer: 'Hey you'},
            {id: 2, answer: 'Go fuck yourself'},
            {id: 3, answer: 'I love you guys!'},
        ]
};

const dialogsReducer = (state=initialeState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
    return {
      ...state,
      newMessageBody: action.body
    }
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: state.newMessageBody}],
        newMessageBody: ""
      }
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const addMessageBodyCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
