import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			// e.g. action.payload === {prop: 'phone', value: '312-276-7450'}
			return {...state, [action.payload.prop]: action.payload.value};

		default:
			return state;
	}
};