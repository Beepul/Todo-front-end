import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import ProfileReducer from "./profileReducer";

const rootReducer = combineReducers({
    profile: ProfileReducer,
    form: formReducer,
});

export default rootReducer;