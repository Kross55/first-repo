import { addPost } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let addStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText 
    };
};

const MyPostsContainer = connect (addStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;
