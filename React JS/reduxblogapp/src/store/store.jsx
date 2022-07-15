import { combineReducers, createStore } from "redux";
import reducer from "../reducers/reducer"

export default()=>{
    const store = createStore(
        combineReducers({
            item:reducer,
        })
    )
    return store;
}