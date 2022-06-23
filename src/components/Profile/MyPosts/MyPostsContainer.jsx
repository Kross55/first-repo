import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let addStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText 
    };
};

let addDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect (addStateToProps, addDispatchToProps) (MyPosts);

export default MyPostsContainer;
