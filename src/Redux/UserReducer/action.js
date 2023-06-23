import axios from "axios"
import { Login_ERROR, Login_REQUEST, Login_SUCCESS, Sign_ERROR, Sign_REQUEST, Sign_SUCCESS } from "./actionTypes"


const signreq = ()=> {
 return {
    type:Sign_REQUEST
 }
}
const signsucc = (paylaod)=> {
    return {
       type:Sign_SUCCESS, paylaod
    }
   }
   const signerr = ()=> {
    return {
       type:Sign_ERROR
    }
   }
   
const loginreq = ()=> {
    return {
       type:Login_REQUEST
    }
   }
   const loginsucc = (paylaod)=> {
       return {
          type:Login_SUCCESS, paylaod
       }
      }
      const loginerr = ()=> {
       return {
          type:Login_ERROR
       }
      }


      export const signup = (email, password,firstname,lastname,reenterpass,company) => (dispatch)=>{
        
         dispatch(signreq())

         return axios.post(`https://good-lime-donkey-sock.cyclic.app/users`,{
            email: email,
            password:password,
            firstname: firstname,
            lastname:lastname,
            reenterpass: reenterpass,
            company: company
        })
         .then((res)=>{
             dispatch(signsucc(res.data))
            
         })
         .catch((e) => {
            dispatch(signerr());
            // console.log(e);
          });

      }
      export const loginfunc = (loginemail ,loginpass) => (dispatch)=>{
        
         dispatch(loginreq())

         return axios.post(`https://good-lime-donkey-sock.cyclic.app/users?email=${loginemail}&password=${loginpass}`)
         .then((res)=>{
             dispatch(loginsucc())
         })
         .catch((e) => {
            dispatch(loginerr());
         
          });

      }