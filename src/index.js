import React from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    debugger
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
