import axios from "axios";
import {
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./SingleProduct.type";

// Product actions here
<<<<<<< HEAD
export const getSingleProduct = (typeOfProduct,id) => async(dispatch) => {
        // console.log("in the logi func");
        dispatch({type :GET_SINGLE_PRODUCT_LOADING });
        try {
            let responce = await axios.get(`https://rus-digital-televisions.onrender.com/${typeOfProduct}/${id}`);
            // console.log("in the logi func try",responce.data);
            dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload : responce.data});
        } catch (error) {
            // console.log("in the logi func catch");
            dispatch({type:GET_SINGLE_PRODUCT_ERROR,payload : error.message});
        }
    }
=======
export const getSingleProduct = (typeOfProduct, id) => async (dispatch) => {
  // console.log("in the logi func");
  dispatch({ type: GET_SINGLE_PRODUCT_LOADING });
  try {
    let responce = await axios.get(
      `https://rus-digital-televisions.onrender.com/${typeOfProduct}/${id}`
    );
    // console.log("in the logi func try",responce.data);
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: responce.data });
  } catch (error) {
    // console.log("in the logi func catch");
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error.message });
  }
};
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48
