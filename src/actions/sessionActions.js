import * as types from "./actionTypes";
import sessionApi from "../api/sessionApi";

export function loginSuccess() {
	return {type: types.LOG_IN_SUCCESS}
}

export function logInAdmin(credentials) {
	return function(dispatch) {
		return sessionApi.login(credentials).then(resp => {
			sessionStorage.setItem("jwt", resp.jwt);
			dispatch(loginSuccess())
		}).catch(error => {
			throw(error);
		});
	}
}