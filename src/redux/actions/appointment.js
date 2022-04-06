import { GET_APPOINTMENTS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointments();
    dispatch({ type: GET_APPOINTMENTS, data });
  } catch (error) {
    console.log(error);
  }
};
