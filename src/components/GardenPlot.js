import React, { useState } from 'react';
import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlot.css';

// Make a div with a grid of divs based on length and width
const GardenPlot = () => {
	const [ plantings, setPlantings ] = useState(null);
	return (
		<div>
			<div className="garden-plot" />
			<NewPlantingButton />
		</div>
	);
};

export default GardenPlot;
