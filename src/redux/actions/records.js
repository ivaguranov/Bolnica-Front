import { CREATE_RECORD, GET_RECORDS } from "../actionTypes";
import * as api from "../../api/index.js";

export const getRecord = (lbp) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecord(lbp);
    dispatch({ type: GET_RECORDS, data });
  } catch (error) {
    console.log(error);
  }
};

export const createRecord = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.createRecord(formData);
    dispatch({ type: CREATE_RECORD, data });
  } catch (error) {
    console.log(error);
  }
};
