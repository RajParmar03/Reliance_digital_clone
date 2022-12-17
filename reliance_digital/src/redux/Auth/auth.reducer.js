import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types"

const init={
    isAuth:false,
    token:"",
    loading:false,
    error:false,
};
export const Authreducer=(state=init,{type,payload})=>{
    switch(type){

        case LOGIN_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                token:payload.token,
                isAuth:true
            }
        }
        case LOGOUT:{
            return{
                ...state,
                isAuth:false,
                token:""
            }
        }

        default:{
            return state;
        }
    }
}