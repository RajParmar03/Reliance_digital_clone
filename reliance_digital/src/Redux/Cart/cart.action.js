import {
  CartError,
  CartLoading,
  CartSuccess,
} from "./cart.types";

import axios from "axios";
export const getData = () => async (dispatch) => {
  dispatch({ type: CartLoading });
  try {
    await axios
      .get("https://rus-digital-televisions.onrender.com/cart")
      .then((res) => dispatch({ type: CartSuccess, payload: res.data }));
  } catch (err) {
    dispatch({ type: CartError });
  }
};
