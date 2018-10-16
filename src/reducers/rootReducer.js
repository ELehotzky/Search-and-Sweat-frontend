let defaultState = {
	FitnessClasses: []
}

export default function rootReducer (state = defaultState, action) {
	switch (action.type) {

		case "ADD_CLASSES":
			return {...state, FitnessClasses: action.payload}

		case "FILTER_CLASSES":
			return {...state, FitnessClasses: action.payload.filter(fitnessClass => {
				return fitnessClass.fitness_class_categories.some(category => {
					return (category.categoryName==="Yoga")
				})
			})}

		default: 
		return state;
	}
}