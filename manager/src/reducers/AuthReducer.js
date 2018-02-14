import {EMAIL_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	error: '',
	user: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {...state, email: action.payload};
		case PASSWORD_CHANGED:
			return {...state, password: action.payload};
		case LOGIN_USER_SUCCESS:
			return {...state, user: action.payload, error: ''};
		case LOGIN_USER_FAIL:
			return {...state, error: 'Authentication failed', password: ''};
		default:
			return state;
	}
};