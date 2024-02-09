
import {combineReducers,applyMiddleware, legacy_createStore} from "redux"
import { reducer as AuthReducer } from "./authRedux/reducer";
import {reducer as productReducer} from "./productRedux/reducer"
// import {reducer as todoReducer } from "./TodoRedux/reducer"
import {thunk} from "redux-thunk"

// import {reducer as TodoReducer} from "./ReduxTodo/reducer"


const rootReducer = combineReducers({AuthReducer,productReducer})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };