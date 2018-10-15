class ClassApi {
	static getAllClasses() {
		return fetch("http://localhost:3000/api/v1/fitness_classes")
		.then(resp => resp.json())
		.catch(error => {
			return error;
		});
	}
}

export default ClassApi;