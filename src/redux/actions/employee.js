import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEES,
  SEARCH_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "../actionTypes";
import * as api from "../../api/index.js";

export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployees();
    dispatch({ type: GET_EMPLOYEES, data });
  } catch (error) {
    console.log(error);
  }
};

export const getEmployee = (lbz) => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployee(lbz);
    dispatch({ type: GET_EMPLOYEES, data });
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(formData);
    dispatch({ type: CREATE_EMPLOYEE, data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.updateEmployee(formData);
    dispatch({ type: UPDATE_EMPLOYEE, data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const searchEmployees = (searchValue) => async (dispatch) => {
  try {
    console.log(searchValue);
    const { data } = await api.searchEmployees(searchValue);
    dispatch({ type: GET_EMPLOYEES, data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = (lbz) => async (dispatch) => {
  try {
    await api.deleteEmployee(lbz);
    dispatch({ type: DELETE_EMPLOYEE, lbz });
  } catch (error) {
    console.log(error);
  }
};
