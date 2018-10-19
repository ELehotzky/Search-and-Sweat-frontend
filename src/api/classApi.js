class ClassApi {
	
	static requestHeaders() {
		return {
			"AUTHORIZATION": `Bearer ${sessionStorage.jwt}`
		}
	}

	static getAllClasses() {
		return fetch("http://localhost:3000/api/v1/fitness_classes")
		.then(resp => resp.json())
		.catch(error => {
			return error;
		});
	}
}

export default ClassApi;