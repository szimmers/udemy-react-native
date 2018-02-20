export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';

/**
 * indicates a user auth is outstanding
 * @type {string}
 */
export const LOGIN_USER = 'LOGIN_USER';

/**
 * outstanding user auth succeeded
 * @type {string}
 */
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

/**
 * outstanding user auth failed
 * @type {string}
 */
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

/**
 * handles keystroke updates of user typing in fields
 * @type {string}
 */
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';

/**
 * handles save of employee form
 * @type {string}
 */
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';

/**
 * indicates employees data has been returned from server
 * @type {string}
 */
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';

/**
 * indicates edited employee was successfully saved
 * @type {string}
 */
export const EMPLOYEE_SAVE_SUCCESS = 'EMPLOYEE_SAVE_SUCCESS';

/**
 * indicates employee was successfully deleted
 * @type {string}
 */
export const EMPLOYEE_DELETE_SUCCESS = 'EMPLOYEE_DELETE_SUCCESS';
