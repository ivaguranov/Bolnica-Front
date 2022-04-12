import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointment";
import employees from "./employee";
import records from "./records";
import doctors from "./doctors";
import diseases from "./diseases";
import examinations from "./examinations";
import departments from "./departments";
import patients from "./patient";
import loggedUser from "./auth";

export const reducers = combineReducers({
  demo,
  employees,
  doctors,
  patients,
  appointments,
  records,
  loggedUser,
  departments,
  diseases,
  examinations,
});
