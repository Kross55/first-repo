import React from "react";
import AddPostForm from "./AddPostFormik/AddPostForm";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements =
        [...props.posts]//копируем пропсы, чтобы не мутировать стейт
            .reverse()//мутирующий метод массива(чтобы его применить нужно предварительно скопировать массив)
            .map( p => <Post message={p.message} likes={p.likes}/>)//не мутирующий метод массива

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <AddPostForm addPost={props.addPost} />
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
