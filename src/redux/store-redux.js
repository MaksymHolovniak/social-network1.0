import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";
import { reducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: reducer,
    app: appReducer   
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;