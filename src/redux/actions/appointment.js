import { GET_APPOINTMENTS, UPDATE_APPOINTMENT } from "../actionTypes";
import * as api from "../../api/index.js";

export const getAppointments = (lbz) => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointments({ lbz });
    dispatch({ type: GET_APPOINTMENTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAppointment = (appointmentData) => async (dispatch) => {
  try {
    const { data } = await api.updateAppointment(appointmentData);
    dispatch({
      type: UPDATE_APPOINTMENT,
      id: appointmentData.appointmentId,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
