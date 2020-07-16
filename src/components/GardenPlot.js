import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../stylings/GardenPlot.css';
import NewRowOrColBtn from './NewRowOrColBtn';
import Dimensions from './Dimensions';
import GardenCell from './GardenCell';

// Make a div with a grid of divs based on length and width
const GardenPlot = () => {
	const gardenDimensions = useSelector((store) => store.dimensions);
	const dispatch = useDispatch();

	function addColumn() {
		dispatch({ type: 'ADD_COLUMN' });
	}

	function minusColumn() {
		dispatch({ type: 'MINUS_COLUMN' });
	}

	function addRow() {
		dispatch({ type: 'ADD_ROW' });
	}

	function minusRow() {
		dispatch({ type: 'MINUS_ROW' });
	}

	const grid = useSelector((store) => store.grid);
	return (
		<div>
			<Dimensions direction="row" value={gardenDimensions.columns} />
			<div id="horiz-flex">
				<Dimensions direction="column" value={gardenDimensions.rows} />
				<div id="garden-holder">
					{/* Original plot setup with just the dimensions from redux */}
					{/* {[ ...Array(gardenDimensions.rows) ].map((x, i) => (
						<div key={gardenDimensions.rows - i} className="row">
							{[ ...Array(gardenDimensions.columns) ].map((y, idx) => (
								<GardenCell
									id={`${idx + 1}-${gardenDimensions.rows - i}`}
									key={`${idx + 1}-${gardenDimensions.rows - i}`}
								/>
							))}
						</div>
					))} */}

					{/* Attempt to build the grid with my new grid setup */}
					{grid.map((row, idx) => <div className="row">{row.map((cell, index) => <GardenCell text={cell} />)}</div>)}
				</div>
				<NewRowOrColBtn direction="column" addColumn={addColumn} minusColumn={minusColumn} />
			</div>
			<NewRowOrColBtn direction="row" addRow={addRow} minusRow={minusRow} />
		</div>
	);
};

export default GardenPlot;
