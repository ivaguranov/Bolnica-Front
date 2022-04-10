import { CREATE_PATIENT, GET_PATIENTS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getPatients = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPatients();
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
