import { LOGIN, LOGOUT } from "../actionTypes";
import * as api from "../../api/index.js";

export const login = (formData) => async (dispatch) => {
  try {
    console.log(`Login form data`);
    console.log(formData);
    const { data } = await api.login(formData);
    console.log(`Login form respone`);
    console.log(data);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
