import React from 'react';
// import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlan.css';
import GardenPlot from './GardenPlot';
import GardenFooter from "./GardenFooter"

const GardenPlan = () => {
	return (
		<div>
		<h1 style={{ textAlign: 'center' }}>Garden Plan</h1>
		<div>
			
			<GardenPlot />
			
		</div>
		</div>
	);
};

export default GardenPlan;
