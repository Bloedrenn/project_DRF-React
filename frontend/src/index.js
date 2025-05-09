import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './styles/core.css';
import App from './App';

const initialState = {
    cash: 0
};

// action = {type: "", payload: }
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            // return {...state, cash: state.cash + action.payload}
            return {cash: state.cash + action.payload};

        case "GET_CASH":
            // return {...state, cash: state.cash - action.payload}
            return {cash: state.cash - action.payload};
        
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
