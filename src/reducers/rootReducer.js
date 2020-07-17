const INITIAL_STATE = {
	dimensions: {
		rows: 4,
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
				dimensions: { ...state.dimensions, columns: state.dimensions.columns + 1 }
				// grid: [ ...state.grid, state.grid.map((row) => row) ]
			};
		case 'MINUS_COLUMN':
			return { ...state, dimensions: { ...state.dimensions, columns: state.dimensions.columns - 1 } };
		case 'ADD_ROW':
			const row_length = state.grid[0].length;
			const new_row = new Array(row_length).fill({ crop: 'empty' });
			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows + 1 },
				grid: [ ...state.grid, (state.grid[state.dimensions.rows] = new_row) ]
			};
		case 'MINUS_ROW':
			let former_rows = [ ...state.grid.pop() ];
			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows - 1 },
				grid: [ ...state.grid ]
			};
		case 'SET_DIMENSIONS':
			return { ...state, dimensions: { ...state.dimensions, rows: action.rowsValue, columns: action.columnsValue } };
		default:
			return state;
	}
};

export default rootReducer;
