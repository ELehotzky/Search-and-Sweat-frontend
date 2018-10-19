import * as types from "./actionTypes";
import sessionApi from "../api/sessionApi";

export function loginSuccess(admin) {
	return {type: types.LOG_IN_SUCCESS,
			payload: admin
		}
}

export function logInAdmin(credentials) {
	return function(dispatch) {
		return sessionApi.login(credentials).then(resp => {
			console.log("hello", resp.admin)
			localStorage.setItem('token', resp.jwt)
			dispatch(loginSuccess(resp.admin))
		}).catch(error => {
			throw(error);
		});
	}
}