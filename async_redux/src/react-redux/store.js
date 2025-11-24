import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { UserReducer } from "./reducer.js/Userreducer";
import {thunk} from 'redux-thunk'
  export const store =createStore(UserReducer,applyMiddleware(thunk))
