import { TestBankReducer } from "./appElements/Reducers/TestBankReducer";
import thunkMiddleware from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import sliderReducer from "./appElements/Reducers/sliderReducer";
import TestBankReducer2 from "./appElements/Reducers/TestBankReducer2";





let reducers=combineReducers({
    testBank:TestBankReducer2,
    slider:sliderReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware)));

    

window.store=store;