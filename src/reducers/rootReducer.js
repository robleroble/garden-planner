const INITIAL_STATE = {
	dimensions: {
		rows: 3,
		columns: 4
	}
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, dimensions: { ...state.dimensions, columns: state.dimensions.columns + 1 } };
		case 'MINUS_COLUMN':
			return { ...state, dimensions: { ...state.dimensions, columns: state.dimensions.columns - 1 } };
		case 'ADD_ROW':
			return { ...state, dimensions: { ...state.dimensions, rows: state.dimensions.rows + 1 } };
		case 'MINUS_ROW':
			return { ...state, dimensions: { ...state.dimensions, rows: state.dimensions.rows - 1 } };
		default:
			return state;
	}
};

export default rootReducer;
