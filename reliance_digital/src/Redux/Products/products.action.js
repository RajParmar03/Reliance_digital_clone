import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS} from "./products.type";

// Product actions here
export const getProducts = (typeOfProduct) => async(dispatch) => {
        // console.log("in the logi func");
        dispatch({type :GET_PRODUCTS_LOADING });
        try {
            let responce = await axios.get(`https://rus-digital-televisions.onrender.com/${typeOfProduct}`);
            console.log("in the logi func try",responce.data);
            dispatch({type:GET_PRODUCTS_SUCCESS,payload : responce.data});
        } catch (error) {
            // console.log("in the logi func catch");
            dispatch({type:GET_PRODUCTS_ERROR,payload : error.message});
        }
    }