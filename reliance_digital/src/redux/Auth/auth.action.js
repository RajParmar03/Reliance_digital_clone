import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    alert(" LOGIN_SUCCESS")
    console.log(res.data);
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert("login fail")
  }
};

export const logout = () => ({ type: LOGOUT });