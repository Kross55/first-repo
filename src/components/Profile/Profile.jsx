import React from "react";
import MyPostsContaner from "./MyPosts/MyPostsContaner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContaner
                store={props.store}
                dispatch={props.dispatch}
                /*addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*//>
        </div>
    );
};

export default Profile;
