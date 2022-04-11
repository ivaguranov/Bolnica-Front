import { CREATE_EXAMINATION, GET_EXAMINATIONS } from "../actionTypes";
import * as api from "../../api/index.js";

export const createExamination = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    // const { data } = await api.createExamination(formData);
    // dispatch({ type: CREATE_EXAMINATION, data });
  } catch (error) {
    console.log(error);
  }
};

export const getExaminations = (lbp) => async (dispatch) => {
  try {
    const { data } = await api.fetchExaminations(lbp);
    console.log(data);
    dispatch({ type: GET_EXAMINATIONS, data });
  } catch (error) {
    console.log(error);
  }
};
