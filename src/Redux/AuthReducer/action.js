import axios from "axios";
import * as types from "./actionTypes";

export const adminLogin= (email,password) => (dispatch) =>{
  dispatch({type: types.ADMIN_LOGIN_REQUEST});

  return axios
  .post("https://good-lime-donkey-sock.cyclic.app/users",{email:email,password:password})
  .then((res) => {
    dispatch({type: types.ADMIN_LOGIN_SUCCESS,payload: res.data.token});
    console.log(res.data.token)
  })
  .catch((err) => {
    dispatch({type: types.ADMIN_LOGIN_ERROR})
  })
}