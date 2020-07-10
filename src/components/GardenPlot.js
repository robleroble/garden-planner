import React, { useState } from 'react';
import '../stylings/GardenPlot.css';
import NewRowOrColBtn from './NewRowOrColBtn';
import Dimensions from './Dimensions';
import GardenCell from './GardenCell';

// Make a div with a grid of divs based on length and width
const GardenPlot = () => {
	const INITIAL_DIMENSIONS = {
		columns: 4,
		rows: 3
	};
	const [ gardenDimensions, setGardenDimensions ] = useState(INITIAL_DIMENSIONS);

	function addColumn() {
		setGardenDimensions((gardenDimensions) => ({
			...gardenDimensions,
			columns: gardenDimensions.columns + 1
		}));
		console.log(gardenDimensions);
	}

	function addRow() {
		setGardenDimensions((gardenDimensions) => ({
			...gardenDimensions,
			rows: gardenDimensions.rows + 1
		}));
		console.log(gardenDimensions);
	}

	function setColumns(value) {
		setGardenDimensions((gardenDimensions) => ({
			...gardenDimensions,
			columns: value
		}));
	}

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

// return (
// 	<div>
// 		<div className="garden-plot" />
// 		<NewPlantingButton />
// 	</div>
// );
