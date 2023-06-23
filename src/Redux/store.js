import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productreducer as productReducer } from "./reducer";
import { singleproductreducer as singleProductReducer } from "./reducer";
import { loginreducer as loginReducer } from "./AuthReducer/reducer";
import { userreducer as userReducer } from "./UserReducer/reducer";


const rootReducer= combineReducers({productReducer,singleProductReducer,loginReducer,userReducer});

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk));