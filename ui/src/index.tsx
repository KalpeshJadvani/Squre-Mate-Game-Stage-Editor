import './index.scss';
import {Dashboard} from "./Dashboard/dashboard";
import ReactDOM = require("react-dom");
import React = require("react");
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    selectedMenu:(state = 1, action:any) => {
        return (action.selectedMenu === undefined ? state : action.selectedMenu);
    },
    selectedStage:(state = 1, action:any) => {
        return (action.selectedStage === undefined ? state : action.selectedStage);
    },
    selectedSquare:(state = 1, action:any) => {
        return (action.selectedSquare === undefined ? state : action.selectedSquare);
    }
});

const store = createStore(reducer);

window.oncontextmenu = () => {
    return false;
}

window.onload = ev => {
    const appElm = document.createElement('div');
    appElm.classList.add('App');
    document.body.appendChild(appElm);

    ReactDOM.render(
        <Provider store={store}>
            <Dashboard/>
        </Provider>,
        appElm
    );
}


