import * as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false,
}

export const loginreducer=(state= initialState,action) =>{
    const {type,payload} = action;
 
    switch(type){
     case types.ADMIN_LOGIN_REQUEST:
         return{
             ...state,
             isAuthLoading:true
         }
     case types.ADMIN_LOGIN_SUCCESS:
         return{
            ...state,
            isAuthLoading:false,
            isAuth: true,
            token:payload,
            isAuthError:false
 
         }
     case types.ADMIN_LOGIN_ERROR:
         return{
             ...state,
             isAuthLoading:false,
             isAuthError:true,
             isAuth:false
         }
     default:
         return state;
    }
 }