import React, { useState } from 'react';
import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlot.css';
import NewRowOrColBtn from './NewRowOrColBtn';

// Make a div with a grid of divs based on length and width
const GardenPlot = () => {
	const INITIAL_DIMENSIONS = {
		columns: 4,
		rows: 3
	};
	const [ gardenDimensions, setGardenDimensions ] = useState(INITIAL_DIMENSIONS);

	function addColumn() {
		console.log('click');
		setGardenDimensions((gardenDimensions) => ({
			...gardenDimensions,
			columns: gardenDimensions.columns + 1
		}));
		console.log(gardenDimensions);
	}

	function addRow() {
		console.log('click');
		setGardenDimensions((gardenDimensions) => ({
			...gardenDimensions,
			rows: gardenDimensions.rows + 1
		}));
		console.log(gardenDimensions);
	}

	return (
		<div id="vert-flex">
			<div id="horiz-flex">
				<div id="garden-holder">
					{[ ...Array(gardenDimensions.rows) ].map((x, i) => (
						<div className="row">
							{[ ...Array(gardenDimensions.columns) ].map((y, idx) => <div className="plot" />)}
						</div>
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
