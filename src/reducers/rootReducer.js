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
			// I need to map out the cells into the array
			const new_row = new Array(row_length).fill('placeholder');
			const filled_row = new_row.map((cell) => ({
				crop: 'empty'
			}));
			console.log(filled_row);

			// This version added new rows but when I clicked on a cell, the entire row turned to tomatoes...
			// const new_row = new Array(row_length).fill({ crop: 'empty' });

			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows + 1 },
				grid: [ ...state.grid, filled_row ]
			};
		case 'MINUS_ROW':
			return {
				...state,
				dimensions: { ...state.dimensions, rows: state.dimensions.rows - 1 },
				grid: [ ...state.grid.slice(0, state.dimensions.rows - 1) ]
			};

		case 'SET_DIMENSIONS':
			const set_row = new Array(action.columnsValue).fill('placeholder');
			const set_grid_array = new Array(action.rowsValue).fill('placeholder');
			const filled_grid = set_row.map((col) => set_grid_array.map((cell) => ({ crop: 'empty' })));
			return {
				...state,
				dimensions: { ...state.dimensions, rows: action.rowsValue, columns: action.columnsValue },
				grid: filled_grid
			};

		case 'CHANGE_CROP':
			let stateCopy = { ...state };
			console.log(action.cellRow, action.cellCol);
			stateCopy.grid[action.cellRow][action.cellCol].crop = 'tomato';
			return {
				...stateCopy,
				grid: [ ...stateCopy.grid ]
			};
		default:
			return state;
	}
};

export default rootReducer;
