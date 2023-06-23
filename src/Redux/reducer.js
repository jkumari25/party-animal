import * as types from "./actionTypes";

const initialState={
    loading: false,
    error: false,
    data: []
}

export const productreducer= (state=initialState,action) =>{

    const {type,payload}= action;

    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return{
              ...state,
              loading: true,
              error: false,
            }
        case types.GET_PRODUCT_SUCCESS:
            return{
              ...state,
              data: payload,
              loading:false,
              error: false,
            }
        case types.GET_PRODUCT_ERROR:
            return{
                ...state,
                loading:false,
                error: true,
            }
        default:
            return state;
    }

}


export const singleproductreducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case types.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                ...state, 
                isLoading: true
            };
        
        case types.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                data: payload
            };

        case types.GET_PRODUCTS_DETAILS_ERROR:
            return {
                ...state, 
                isLoading: false, 
                isError: true
            };

        default:
            return state;
    }

}
