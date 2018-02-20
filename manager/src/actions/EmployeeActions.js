import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_UPDATE} from './types';

/**
 * fetch employees from db
 * @returns {function(*)}
 */
export const employeesFetch = () => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees`)
			.on('value', (snapshot) => {
				dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
			});
	}
};

/**
 * updates when user types in field or changes picker
 * @param prop
 * @param value
 * @returns {{type: string, payload: {prop: *, value: *}}}
 */
export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
};

/**
 * user saves employee form on the create screen
 * @param name
 * @param phone
 * @param shift
 */
export const employeeCreate = ({name, phone, shift}) => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees`)
			.push({name, phone, shift})
			.then(() => {
				dispatch({type: EMPLOYEE_CREATE});
				Actions.pop();
			});
	}
};

/**
 * user saves employee form on the update screen
 * @param name
 * @param phone
 * @param shift
 * @param uid
 * @returns {function(*)}
 */
export const employeeSave = ({name, phone, shift, uid}) => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
			.set({name, phone, shift})
			.then(() => {
				//dispatch({type: EMPLOYEE_CREATE});
				Actions.pop();
			});
	}
};
