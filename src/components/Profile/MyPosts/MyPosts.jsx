import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    placeholder='post here'
                    value={props.newPostText} />
            </div>
            <div>
                <button  onClick={ addPost }>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
