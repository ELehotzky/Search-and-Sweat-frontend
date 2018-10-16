let defaultState = {
	FitnessClasses: [],
	Filters: []
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

		case "ADD_TO_FILTER":
			return {...state, Filters: [...state.Filters, action.payload]}
		
		case "REMOVE_FROM_FILTER":
			let filteredClasses = state.Filters.filter(fitnessClass => fitnessClass !== action.payload)
			return {...state, Filters: filteredClasses}

		default: 
		return state;
	}
}