const INITIAL_STATE = {
	dimensions: {
		rows: 4,
		columns: 4
	},
	grid: [
		[ { crop: 'empty' }, { crop: 'tomato' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ],
		[ { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' }, { crop: 'empty' } ]
	]
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return {
				...state,
				dimensions: { ...state.dimensions, columns: state.dimensions.columns + 1 },
				grid: [ ...state.grid.map((row) => [ ...row, { crop: 'empty' } ]) ]
			};
		case 'MINUS_COLUMN':
			return {
				...state,
				dimensions: { ...state.dimensions, columns: state.dimensions.columns - 1 },
				grid: [ ...state.grid.map((row) => [ ...row.slice(0, state.dimensions.columns - 1) ]) ]
			};
		case 'ADD_ROW':
			const row_length = state.grid[0].length;
			const new_row = new Array(row_length).fill({ crop: 'empty' });
			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows + 1 },
				grid: [ ...state.grid, (state.grid[state.dimensions.rows] = new_row) ]
			};
		case 'MINUS_ROW':
			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows - 1 },
				grid: [ ...state.grid.slice(0, state.dimensions.rows - 1) ]
			};
		case 'SET_DIMENSIONS':
			const former_num_cols = state.dimensions.columns;
			const former_num_rows = state.dimensions.rows;
			const set_row = new Array(action.columnsValue).fill({ crop: 'empty' });
			return {
				...state,
				dimensions: { ...state.dimensions, rows: action.rowsValue, columns: action.columnsValue },
				grid: new Array(action.rowsValue).fill(set_row)
			};
		default:
			return state;
	}
};

export default rootReducer;
