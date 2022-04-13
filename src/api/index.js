import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9092/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer:${localStorage.getItem("token")}`;
    req.headers.common["Content-Type"] = "application/json;charset=UTF-8";
    req["headers"]["common"]["Accept"] = "application/json";
    // req["headers"]["common"]["Content-Type"] = "text/html";
  }

  return req;
});

// DEMO ROUTES

export const fetchDemos = () => API.get(`/demos`);
export const fetchDemo = (id) => API.get(`/demos/${id}`);
export const createDemo = (data) => API.post("/demos", data);
export const updateDemo = (id, data) => API.put(`/demos/${id}`, data);
export const deleteDemo = (id) => API.delete(`/demos/${id}`);

// AUTH

export const login = (formData) =>
  API.post("/bolnica-user-service/api/login", formData);

// NURSE ROUTES

export const fetchDoctors = () => API.get(`/doctors`);
export const fetchAppointments = (data) =>
  API.post(`/bolnica-management-service/api/list-appointments-by-lbz`, data);
export const createAppointmentNurse = (data) =>
  API.post("/bolnica-management-service/api/set-appointment", data);
export const deleteAppointmentNurse = (id) => API.delete(`/demos/${id}`);

export const updateAppointment = (data) =>
  API.put(`/bolnica-management-service/api/update-appointment-status`, data);

// EXAMINATIONS

export const fetchExaminations = (lbp) =>
  API.post(
    `/bolnica-management-service/api/fetch-istorija-bolesti/${lbp}?page=1&size=5`,
    {
      dijagnoza: "string",
    }
  );
export const createExamination = (formData) => API.post("/demos", formData);

// RECORDS

export const fetchRecord = (lbp) =>
  API.get(`/bolnica-management-service/api/fetch-zdravstveni-karton/${lbp}`);
export const createRecord = (formData) =>
  API.post(`/bolnica-management-service/api/create-pregled-report`, formData);
export const searchPatients = (searchValues) =>
  API.post("/patients", searchValues);

// EMPLOYEES
export const fetchEmployees = () =>
  API.post(`/bolnica-user-service/api/list-employees?page=1&size=5`, {
    department: 1,
  });
export const fetchEmployee = (lbz) =>
  API.get(`/bolnica-user-service/api/get-employee/${lbz}`);
export const searchEmployees = (searchValues) =>
  API.post("/employees", searchValues);
export const createEmployee = (formData) =>
  API.post(`/bolnica-user-service/api/create-employee`, formData);
export const updateEmployee = (formData) =>
  API.put(`/bolnica-user-service/api/update-employee`, formData);
export const deleteEmployee = (lbz) =>
  API.delete(`/bolnica-user-service/api/remove-employee/${lbz}`);

// DEPARTMENTS

export const fetchDepartments = () =>
  API.get(`/bolnica-management-service/api/fetch-departments`);

// PATIENTS

export const fetchPatients = () =>
  API.post(`/bolnica-management-service/api/filter-patients`, {});
export const fetchPatient = (lbp) =>
  API.get(`/bolnica-management-service/api/fetch-patient/${lbp}`);
export const createPatient = (formData) =>
  API.post(`/bolnica-management-service/api/create-patient`, formData);
export const deletePatient = (lbp) =>
  API.delete(`/bolnica-management-service/api/remove-patient/${lbp}`);

// DISEASES
export const fetchDiseases = (lbp, data) =>
  API.post(
    `/bolnica-management-service/api/fetch-istorija-bolesti/${lbp}?page=1&size=5`,
    data
  );
