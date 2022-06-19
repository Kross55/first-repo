import React from "react";
import s from "./../Dialogs.module.css";


const MessageItem = (props) => {
    return (
            <div className={s.message}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg" />
                {props.message}
            </div>
    );
};


export default MessageItem;
