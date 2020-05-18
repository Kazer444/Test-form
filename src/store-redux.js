import { TestBankReducer } from "./appElements/Reducers/TestBankReducer";
import thunkMiddleware from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import sliderReducer from "./appElements/Reducers/sliderReducer";
import TestBankReducer2 from "./appElements/Reducers/TestBankReducer2";
import TestBankReducer3 from "./appElements/Reducers/TestBankReducer3";





let reducers=combineReducers({
    testBank:TestBankReducer3,
    slider:sliderReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware)));

    

window.store=store;