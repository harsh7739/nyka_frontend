
import {combineReducers,applyMiddleware, legacy_createStore} from "redux"
import { reducer as AuthReducer } from "./authRedux/reducer";
import {reducer as productReducer} from "./productRedux/reducer"
import {thunk} from "redux-thunk"


const rootReducer = combineReducers({AuthReducer,productReducer})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };