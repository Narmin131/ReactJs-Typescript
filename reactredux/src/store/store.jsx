import { combineReducers, createStore } from "redux";
import Reducer from "../reducers/reducer"


export default ()=>{
    const store = createStore(
        combineReducers({
            item:Reducer,
        })
    );
    return store;
};