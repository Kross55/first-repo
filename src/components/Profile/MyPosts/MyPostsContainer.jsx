import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return <MyPosts
        posts={state.posts} 
        newPostText={state.newPostText}
        addPost={addPost}
        updateNewPostText={onPostChange}
    />
};

export default MyPostsContainer;
