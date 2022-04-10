import * as actionType from "../actionTypes";
const employeeReducer = (state = [], action) => {
	switch (action.type) {
		case actionType.GET_EMPLOYEES:
			return action.data;
		case actionType.CREATE_EMPLOYEE:
			return [...state, action.data];
		case actionType.DELETE_EMPLOYEE:
			return [
				...state,
				state.filter((employee) =>
					employee.id !== action.id ? employee : false
				),
			];
		default:
			return state;
	}
};

export default employeeReducer;
