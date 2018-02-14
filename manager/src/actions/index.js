import firebase from 'firebase';
import {EMAIL_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
};

const userLoginSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const userLoginFail = (dispatch) => {
	dispatch({type: LOGIN_USER_FAIL});
};

export const loginUser = ({email, password}) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => userLoginSuccess(dispatch, user))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => userLoginSuccess(dispatch, user))
					.catch(() => userLoginFail(dispatch));
			});
	};
};
