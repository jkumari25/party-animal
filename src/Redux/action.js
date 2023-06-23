import * as types from "./actionTypes";
import axios from "axios";

export const getProductData= async(dispatch)=>{

    dispatch({type: types.GET_PRODUCTS_REQUEST});

    try {
        const res= await axios.get("https://good-lime-donkey-sock.cyclic.app/products");
        // console.log(res.data);
        dispatch({
            type: types.GET_PRODUCT_SUCCESS, 
            payload: res.data
        });
        return res.data;
    } 
    catch (error) {
        dispatch({type: types.GET_PRODUCT_ERROR});
    }

}

// Get single product

export const getsingleProduct =({id}) => (dispatch) =>{
    dispatch({type: types.GET_PRODUCTS_DETAILS_REQUEST});
    return axios
    .get(`https://good-lime-donkey-sock.cyclic.app/products/${id}`)
    .then((r) =>{
        dispatch({type: types.GET_PRODUCTS_DETAILS_SUCCESS, payload: r.data});
    })
    .catch((e) =>{
        dispatch({type: types.GET_PRODUCTS_DETAILS_ERROR})
    })
}
