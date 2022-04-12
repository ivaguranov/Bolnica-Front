import { CREATE_PATIENT, DELETE_PATIENT, GET_PATIENTS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getPatients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPatients();
    dispatch({ type: GET_PATIENTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const getPatient = (lbp) => async (dispatch) => {
  try {
    const { data } = await api.fetchPatient(lbp);
    dispatch({ type: GET_PATIENTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const searchPatients = (searchValue) => async (dispatch) => {
  try {
    console.log(searchValue);
    const { data } = await api.searchPatients(searchValue);
    dispatch({ type: GET_PATIENTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const createPatient = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createPatient(formData);
    dispatch({ type: CREATE_PATIENT, data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    console.log("CAO");
    await api.deletePatient(id);
    dispatch({ type: DELETE_PATIENT, id });
  } catch (error) {
    console.log(error);
  }
};
