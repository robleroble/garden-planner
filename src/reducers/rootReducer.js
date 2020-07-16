const INITIAL_STATE = {
	dimensions: {
		rows: 3,
		columns: 4
	},
	grid: [
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ]
	]
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			console.log(state.grid);
			return {
				...state,
				dimensions: { ...state.dimensions, columns: state.dimensions.columns + 1 },
				grid: [ ...state.grid, { crop: 'empty' } ]
			};
		case 'MINUS_COLUMN':
			return { ...state, dimensions: { ...state.dimensions, columns: state.dimensions.columns - 1 } };
		case 'ADD_ROW':
			return { ...state, dimensions: { ...state.dimensions, rows: state.dimensions.rows + 1 } };
		case 'MINUS_ROW':
			return { ...state, dimensions: { ...state.dimensions, rows: state.dimensions.rows - 1 } };
		case 'SET_DIMENSIONS':
			return { ...state, dimensions: { ...state.dimensions, rows: action.rowsValue, columns: action.columnsValue } };
		default:
			return state;
	}
};

export default rootReducer;
