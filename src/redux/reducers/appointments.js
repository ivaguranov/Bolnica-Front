import * as actionType from "../actionTypes";

const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_APPOINTMENTS:
      return action.data;
    case actionType.UPDATE_APPOINTMENT:
      return [
        ...state,
        state.map((appointment) =>
          appointment.id !== action.id ? appointment : action.data
        ),
      ];
    default:
      return state;
  }
};

export default appointmentsReducer;
