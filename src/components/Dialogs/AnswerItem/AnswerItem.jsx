import React from "react";
import s from "./../Dialogs.module.css";


const AnswerItem = (props) => {
    return (
        <div className={s.answer}>
            {props.answer}
            <img src="https://images-na.ssl-images-amazon.com/images/I/91ErqttBmKL._RI_.jpg"/>
        </div>
    );
};


export default AnswerItem;