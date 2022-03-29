import { 
    LOGIN_START,
    LOGIN_SUCESS,
    SIGNUP_START 
} from "../action/actionType";
// import setAuthorizationToken from './auth';

let user = JSON.parse(localStorage.getItem("user"));
const initState = {
    isLoggedIn:user? true: false,
    loading: false,
    sucess:false,
    user: user,
    error: null,
    modelOpen: false,
    modelROpen:false
}

const ProfileReducer = (state = initState, action) =>{
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                modelOpen: !state.modelOpen,
            };
        case LOGIN_SUCESS:
            const user = action.payload.data;
            user.token = action.payload.data.token;
            localStorage.setItem("user", JSON.stringify(user));
            // setAuthorizationToken(user.token);
            return{
                ...state,
                isLoggedIn: true,
                loading:false,
                user:user,
                sucess:true,
            };
        case SIGNUP_START:
            return{
                ...state,
                modelROpen: !state.modelROpen
            };
            default:
                return state;
    }
};
export default ProfileReducer;