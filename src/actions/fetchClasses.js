export function fetchClasses() {
	return (dispatch) => {
		dispatch({ 
			type: "START_ADDING_CLASSES_REQUEST"
		});
		return fetch("http://localhost:3000/api/v1/fitness_classes")
			.then(resp => resp.json())
			.then(fitnessClasses => dispatch({type: "ADD_CLASSES", fitnessClasses}));
	};
}