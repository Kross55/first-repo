const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialeState = {
  posts: [
    { id: 1, message: "Hi everyone", likes: 13 },
    { id: 2, message: "Hi, my friends!", likes: 40 },
    { id: 3, message: "What am i doing here?", likes: 61 },
    { id: 4, message: "Oops", likes: 17 },
    { id: 5, message: "Hey", likes: 93 },
  ],
  newPostText: "profile",
};

const profileReducer = (state = initialeState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case ADD_POST: {
      let stateCopy = {
        ...state,
        posts: [...state.posts]
      };
      let newPost = {
        id: 6,
        message: stateCopy.newPostText,
        likes: 0,
      };
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
