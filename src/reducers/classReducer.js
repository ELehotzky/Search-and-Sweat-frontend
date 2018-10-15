let defaultState = {
	FitnessClasses: []
}

export default function classReducer (state = defaultState, action) {
	switch (action.type) {
		case "ADD_CLASSES":
			return {...state, FitnessClasses: action.payload}
		default: 
		return state;
	}
}