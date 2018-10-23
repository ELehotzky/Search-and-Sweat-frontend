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
			localStorage.setItem('token', resp.jwt)
			dispatch(loginSuccess(resp.admin))
		}).catch(error => {
			console.log("we have an error")
			throw(error);
		});
	}
}

export function logInToken(token) {
	return function(dispatch) {
		return sessionApi.tokenLogin(token).then(resp => {
			console.log(resp)
		})
	}
}

export function logOutSuccess(admin) {
	return {type: types.LOG_OUT_SUCCESS,
		payload: admin
	}
}
