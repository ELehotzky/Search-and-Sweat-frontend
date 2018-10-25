class SessionApi {
	static login(credentials) {
		const request = new Request("http://localhost:3000/api/v1/login", {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({auth: credentials})
		});

		return fetch(request).then(resp => {
			return resp.json();
		}).catch(error => {
			return error;
		});
	}

	static tokenLogin(token) {
		console.log(token)
		fetch("http://localhost:3000/api/v1/profile", {
			method: "GET", 
			headers: {
			Authorization: `Bearer ${token}`
			}
		}).then(resp => {
			return resp.json();
			})
			.catch(error => {
				console.log("error")
				return error;
			});
		}
}

export default SessionApi;