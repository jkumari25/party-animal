import { Login_ERROR, Login_REQUEST, Login_SUCCESS, Sign_ERROR, Sign_REQUEST, Sign_SUCCESS } from "./actionTypes"

const initialState = {
    user:[],
    isLoading: true,
    isError: "",
    isAuth:false
}

export const userreducer = (state = initialState , {type,payload})=>{

    switch(type){
      case Sign_REQUEST:
        return {...state , isLoading: true, isError:false}
        case Sign_SUCCESS:
        return {...state , isLoading: false, isError:false , user:payload }
        case Sign_ERROR:
        return {...state , isLoading: false, isError:true}
        case Login_REQUEST:
            return {...state , isLoading: true, isError:false}
            case Login_SUCCESS:
            return {...state , isLoading: false, isError:false , isAuth:true , user:payload }
            case Login_ERROR:
            return {...state , isLoading: false, isError:true}
        default: {
            return state
        }
    }
}