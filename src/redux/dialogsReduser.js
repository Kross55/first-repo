const SEND_MESSAGE = "SEND_MESSAGE";

let initialeState = {
  dialogs: [
    { id: 1, name: 'Leo' },
    { id: 2, name: 'Dony' },
    { id: 3, name: 'Miky' },
    { id: 4, name: 'Raf' },
    { id: 5, name: 'Splinter' },
    { id: 6, name: 'April' },
    { id: 7, name: 'Shreder' },
  ],
  messages: [
    { id: 1, message: 'Hi everyone' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'What am i doing here?' },
    { id: 4, message: 'Yok' },
    { id: 5, message: 'Hey' },
  ],
  answers: [
    { id: 1, answer: 'Hey you' },
    { id: 2, answer: 'Go fuck yourself' },
    { id: 3, answer: 'I love you guys!' },
  ]
};

const dialogsReducer = (state = initialeState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.newMessageBody }]
      }
    default:
      return state;
  }
};

export const addMessageBody = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
