import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likes}
      </div>
    </div>
  );
};

export default Post;
