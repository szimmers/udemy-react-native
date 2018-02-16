import firebase from 'firebase';
import {EMPLOYEE_CREATE, EMPLOYEE_UPDATE} from './types';

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
 * user saves employee form
 * @param name
 * @param phone
 * @param shift
 */
export const employeeCreate = ({name, phone, shift}) => {
	//type: EMPLOYEE_CREATE,
	const {currentUser} = firebase.auth();
	firebase.database().ref(`users/${currentUser.uid}/employees`)
		.push({name, phone, shift});
};