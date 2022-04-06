import { combineReducers } from "redux";

import demo from "./demo";
import appointments from "./appointment";

export const reducers = combineReducers({
  demo,
  appointments,
});
