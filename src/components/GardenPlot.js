import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import '../stylings/GardenPlot.css';
import NewRowOrColBtn from './NewRowOrColBtn';
import Dimensions from './Dimensions';
import GardenCell from './GardenCell';

// Make a div with a grid of divs based on length and width
const GardenPlot = () => {
	const gardenDimensions = useSelector((store) => store.dimensions)
	const dispatch = useDispatch();

	function addColumn() {
		dispatch({type: 'ADD_COLUMN'})
	}

	function addRow() {
		dispatch({type: 'ADD_ROW'})
	}

	// function setColumns(value) {
	// 	setGardenDimensions((gardenDimensions) => ({
	// 		...gardenDimensions,
	// 		columns: value
	// 	}));
	// }

	return (
		<div>
			<Dimensions direction="row" value={gardenDimensions.columns} />
			<div id="horiz-flex">
				<Dimensions direction="column" value={gardenDimensions.rows} />
				<div id="garden-holder">
					{[ ...Array(gardenDimensions.rows) ].map((x, i) => (
						<div key={gardenDimensions.rows-i} className="row">{[ ...Array(gardenDimensions.columns) ].map((y, idx) => <GardenCell id={`${idx+1}-${gardenDimensions.rows-i}`} key={`${idx+1}-${gardenDimensions.rows-i}`} />)}</div>
					))}
				</div>
				<NewRowOrColBtn direction="column" addColumn={addColumn} />
			</div>
			<NewRowOrColBtn direction="row" addRow={addRow} />
		</div>
	);
};

export default GardenPlot;