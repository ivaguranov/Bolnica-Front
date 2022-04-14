import {
  CREATE_PATIENT,
  DELETE_PATIENT,
  GET_PATIENTS,
  UPDATE_PATIENT,
} from "../actionTypes";
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

export const updatePatient = (formData, lbp) => async (dispatch) => {
  try {
    const { data } = await api.updatePatient(formData, lbp);
    dispatch({ type: UPDATE_PATIENT, data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = (lbp) => async (dispatch) => {
  try {
    await api.deletePatient(lbp);
    dispatch({ type: DELETE_PATIENT, lbp });
  } catch (error) {
    console.log(error);
  }
};
