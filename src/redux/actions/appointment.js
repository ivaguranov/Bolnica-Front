import { GET_APPOINTMENTS, UPDATE_APPOINTMENT } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAppointments = (lbz) => async (dispatch) => {
  try {
    console.log({ lbz });
    const { data } = await api.fetchAppointments({ lbz });
    dispatch({ type: GET_APPOINTMENTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAppointment = (id, appointment) => async (dispatch) => {
  try {
    console.log(id);
    console.log(appointment);

    const { data } = await api.updateAppointment(id, appointment);
    dispatch({ type: UPDATE_APPOINTMENT, id, data });
  } catch (error) {
    console.log(error);
  }
};
